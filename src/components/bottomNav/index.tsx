"use client";

import Image from "next/image";
import ReactPlayer from "react-player";
import { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

import secondsToTime from "@/utils/time";
import CustomRange from "@/layout/CustomRange";
import ClientOnly from "@/utils/ClientOnly";
import PlayerIcons from "@/layout/PlayerIcons";

import {
  VolumeMutedIcon,
  VolumeFullIcon,
  VolumeNormalIcon,
  VolumeLowIcon,
} from "@/assets/Icons";

const BottomNav = () => {
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const playerRef = useRef<ReactPlayer>(null);

  const { current } = useSelector((state: any) => state.player);
  const { playing } = useSelector((state: any) => state.player);

  const volumeIcon = useMemo(() => {
    if (volume === 0) {
      return VolumeMutedIcon;
    } else if (volume < 0.5) {
      return VolumeLowIcon;
    } else if (volume < 1) {
      return VolumeNormalIcon;
    } else {
      return VolumeFullIcon;
    }
  }, [volume]);

  return (
    <div className=" flex  md:hidden justify-center xs:justify-between  rounded-t-3xl items-center  h-20 absolute bottom-0  w-full gap-2 text-escuro  bg-bloodRed">
      <div className="flex min-w-[11.25rem] w-[%30]">
        {current && (
          <div className="flex  items-center ">
            <div className="w-20  pl-5 mr-3  ">
              <Image
                src={current?.cover}
                width={60}
                height={60}
                alt="Micheal Jackson"
              />
            </div>

            <div className=" flex flex-col overflow-x-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <h6 className="text-sm w-12 ">{current.title}</h6>
              </div>

              <p className="text-[0.688rem] text-white text-opacity-70">
                {current.artist}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col item-center   t-2 max-w-[45.125rem] w-[40%]">
        <PlayerIcons />
        <div className="w-full flex items-center gap-x-2">
          <ClientOnly>
            <ReactPlayer
              ref={playerRef}
              url={current?.src}
              playing={playing}
              volume={volume}
              muted={volume === 0}
              onDuration={(d) => setDuration(d)}
              onProgress={({ playedSeconds }) =>
                setPlayedSeconds(playedSeconds)
              }
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
      </div>

      {/* right */}
      <div className="hidden  xss:min-w-[7.25rem]   pr-4 w-[%20] xs:flex  items-center justify-center ">
        <button
          onClick={() => {
            if (volume === 0) {
              setVolume(0.5);
            } else {
              setVolume(0);
            }
          }}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Image src={volumeIcon} alt="Volume" />
        </button>

        <div className="w-[4.813rem] max-w-full items-center ">
          <CustomRange
            className="w-full group flex h-2"
            value={[volume * 100]}
            step={1}
            min={0}
            max={100}
            onChange={(values: number[]) => {
              setVolume(values[0] / 100);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
