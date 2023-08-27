"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  RepeatIcon,
  RandomIcon,
  BackIcon,
  PlayIcon,
  NextIcon,
  PauseIcon,
} from "@/assets/Icons";
import { PlayerState, Song } from "@/types";
import { setCurrent, setPlaying } from "@/redux/features/PlayerSlice";


const PlayerIcons = () => {
  const dispatch = useDispatch();

  const [playingPlayer, setPlayingPlayer] = useState<boolean>(false);

  const { allSongs, selectedId, playing } = useSelector(
    (state: { player: PlayerState }) => state.player
  );

  const current = allSongs.find((song: Song) => song.id === selectedId);

  useEffect(() => {
    dispatch(setPlaying(playingPlayer));
  }, [playingPlayer]);

  const nextSongHandler = () => {
    if (selectedId === null) return; 

    const nextSongId = selectedId + 1;
    dispatch(setPlaying(true));
    if (nextSongId > allSongs.length) {
      return dispatch(setCurrent({ allSongs: allSongs, selectedId: 1 }));
    } else {
      return dispatch(
        setCurrent({ allSongs: allSongs, selectedId: nextSongId })
      );
    }
  };
  const previousSongHandler = () => {
    if (selectedId === null) return; 
    
    const previousSongId = selectedId - 1;
    dispatch(setPlaying(true));
    if (previousSongId < 1) {
      return dispatch(
        setCurrent({ allSongs: allSongs, selectedId: allSongs.length })
      );
    } else {
      return dispatch(
        setCurrent({ allSongs: allSongs, selectedId: previousSongId })
      );
    }
  };

  const randomSongHandler = () => {
    let randomSongId = Math.floor(Math.random() * allSongs.length) + 1;

    while (randomSongId === selectedId) {
      randomSongId = Math.floor(Math.random() * allSongs.length) + 1;
    }

    dispatch(setCurrent({ allSongs: allSongs, selectedId: randomSongId }));
    dispatch(setPlaying(true));
  };

  console.log(selectedId);

  return (
    <div className="flex  items-center justify-center  gap-x-2">
      <button disabled className="w-8 h-8  flex items-center justify-center text-opacity-70 hover:text-opacity-100">

        <Image src={RepeatIcon} alt="Micheal Jackson" />
      </button>
      <button
        onClick={previousSongHandler}
        className="w-8 h-8 flex items-center justify-center hover:scale-[1.06]  text-opacity-70 hover:text-opacity-100"
      >
        <Image src={BackIcon} alt="Micheal Jackson" />
      </button>
      <button
        onClick={() => setPlayingPlayer(!playingPlayer)}
        className="w-10 h-10 flex items-center  bg-bordo rounded-full hover:scale-[1.06] justify-center text-opacity-70 hover:text-opacity-100"
      >
        <Image src={playing ? PauseIcon : PlayIcon} alt="Micheal Jackson" />
      </button>
      <button
        onClick={nextSongHandler}
        className="w-8 h-8 flex items-center  hover:scale-[1.06] justify-center text-opacity-70 hover:text-opacity-100"
      >
        <Image src={NextIcon} alt="Micheal Jackson" />
      </button>
      <button
        onClick={randomSongHandler}
        className="w-8 h-8 flex items-center justify-center hover:scale-[1.06] text-opacity-70 hover:text-opacity-100"
      >
        <Image src={RandomIcon} alt="Micheal Jackson" />
      </button>
    </div>
  );
};

export default PlayerIcons;
