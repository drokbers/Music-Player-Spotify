"use client"
import Image from "next/image";
import {
  RepeatIcon,
  RandomIcon,
  BackIcon,
  PlayIcon,
  NextIcon,
  PauseIcon,
} from "@/assets/Icons";

import { setPlaying } from "@/redux/features/PlayerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PlayerIcons = () => {
  const dispatch = useDispatch();

  const [playingPlayer, setPlayingPlayer] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setPlaying(playingPlayer));
  }, [playingPlayer]);

  const { playing } = useSelector((state: any) => state.player);

  return (
    <div className="flex  items-center justify-center  gap-x-2">
      <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
        <Image src={RepeatIcon} alt="Micheal Jackson" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
        <Image src={BackIcon} alt="Micheal Jackson" />
      </button>
      <button
        onClick={() => setPlayingPlayer(!playingPlayer)}
        className="w-10 h-10 flex items-center  bg-bordo rounded-full hover:scale-[1.06] justify-center text-opacity-70 hover:text-opacity-100"
      >
        <Image src={playing ? PauseIcon : PlayIcon} alt="Micheal Jackson" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
        <Image src={NextIcon} alt="Micheal Jackson" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100">
        <Image src={RandomIcon} alt="Micheal Jackson" />
      </button>
    </div>
  );
};

export default PlayerIcons;
