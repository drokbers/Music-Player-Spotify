"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { SongItemProps } from "@/types";

import { setCurrent, setPlaying } from "@/redux/features/PlayerSlice";
import { PlayIcon, PauseIcon } from "@/assets/Icons";

const SongItem = ({ item, index, allSongs }: SongItemProps) => {
  const dispatch = useDispatch();

  const { selectedId, playing } = useSelector((state: any) => state.player);

  const current = allSongs.find((song: any) => song.id === selectedId);

  const updateCurrent = () => {
    dispatch(setCurrent({ allSongs: allSongs, selectedId: item.id }));
    dispatch(setPlaying(!playing));
  
  };
  console.log(allSongs);

  const playingStyle = () => {
    if (current && current?.id === item.id) {
      return "text-white bg-bordo";
    }
    return "text-escuro";
  };

  const determineIcon = () => {
    if (playing && current?.id === item.id) {
      return PauseIcon;
    }
    return PlayIcon;
  };

  useEffect(() => {
    determineIcon();
  }, [playing, current]);

  return (
    <tr key={item.id} className={`group  hover:bg-bordo ${playingStyle()}`}>
      <th className="py-4 px-3 relative ">
        <span className="absolute inset-0  flex items-center justify-center group-hover:hidden">
          {index + 1}
        </span>
        <button
          onClick={() => updateCurrent()}
          className="absolute px-3 inset-0  items-center justify-center hidden group-hover:flex"
        >
          <Image
            src={determineIcon()}
            width={70}
            height={70}
            alt="play"
            className="min-w-[20px]  min-h-[20px]"
          />
        </button>
      </th>

      <td className="px-6 py-4  ">
        <Image
          src={item.cover}
          width={50}
          height={50}
          alt="xxx"
          className="min-w-[50px] min-h-[50px]"
        />
      </td>

      <td className="relative group  px-6 py-4 justify-center">
        {item.title.slice(0, 14)}
        <div className=" flex overflow-auto ">
          <span className="scale-0 absolute top-0 left-6 rounded bg-gray-800 text-xs text-white group-hover:scale-100">
            {item.title}
          </span>
        </div>
      </td>

      <td className="px-6 py-4">{item.playing}</td>
      <td className="px-6 py-4">{item.time}</td>
      <td className="px-0 py-4  ">{item.album}</td>
    </tr>
  );
};

export default SongItem;
