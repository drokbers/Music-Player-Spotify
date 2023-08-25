"use client";

import Image from "next/image";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import secondsToTime from "@/utils/time";
import CustomRange from "@/layout/CustomRange";
import ClientOnly from "@/utils/ClientOnlyU";
import PlayerIcons from "@/layout/PlayerIcons";

import { MichealPoster } from "@/assets/Images";

import { setPlaying } from "@/redux/features/PlayerSlice";


const Player = () => {
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [current, setCurrent] = useState<any>(null);

  const playerRef = useRef<ReactPlayer>(null);

  const { allSongs, selectedId, playing } = useSelector(
    (state: any) => state.player
  );

    useEffect(() => {
    const current = allSongs.find((song: any) => song.id === selectedId);
    setCurrent(current);
    setPlaying(true);
  }, [selectedId, allSongs]);


  return (
    <div className="flex  flex-col pt-4  rounded-2xl gap-2 items-center bg-bloodRed w-[250px] text-escuro h-[320px]">
      <span className="text-sm">Now Playing</span>
      <div className="relative w-52 h-32 ">
        <Image
          className="rounded-2xl "
          src={current?.cover || MichealPoster}
          fill
          style={{ objectFit: "cover" }}
          alt="`xxx`"
        />
      </div>

      <div className="flex flex-col items-center overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-lg">{current?.title}</span>
        </div>

        <span className="text-bej">{current?.artist}</span>
      </div>
      <div className="w-full flex items-center gap-x-2 mr-2">
        <ClientOnly>
          <ReactPlayer
            ref={playerRef}
            url={current?.src}
            playing={playing}
            volume={volume}
            muted={volume === 0}
            onDuration={(d) => setDuration(d)}
            onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
            width="0%"
            height="0%"
            style={{ display: "none" }}
          />
        </ClientOnly>

        <div className="text-opacity-70">{secondsToTime(playedSeconds)}</div>

        <CustomRange
          className="w-full group flex h-2"
          value={[playedSeconds]}
          step={0.1}
          min={0}
          max={duration || 1}
          onChange={(values: number[]) => {
            if (playerRef.current && values.length > 0) {
              playerRef.current.seekTo(values[0], "seconds");
            }
          }}
        />

        <div className="text-opacity-70">{secondsToTime(duration || 0)}</div>
      </div>

      <PlayerIcons />
    </div>
  );
};
export default Player;
