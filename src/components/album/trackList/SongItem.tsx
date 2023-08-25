"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { setCurrent, setPlaying } from "@/redux/features/PlayerSlice";

import { MichealTrack } from "@/assets/Images";
import { PlayIcon, PauseIcon } from "@/assets/Icons";

import { useEffect } from "react";


interface SongItemProps {
  item: any;
  index: number;
}

const SongItem = ({ item, index }: SongItemProps) => {
  const dispatch = useDispatch();
  const { current } = useSelector((state: any) => state.player);
  const { playing } = useSelector((state: any) => state.player);

  const updateCurrent = () => {
    dispatch(setCurrent(item));
    dispatch(setPlaying(!playing));
  };

  const playingStyle = () => {
    if (current  && current?.id === item.id) {
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
    <tr key={item.id} className={`group hover:bg-bordo ${playingStyle()}`}>
      <th className="py-4 relative ">
        <span className="absolute inset-0 flex items-center justify-center group-hover:hidden">
          {index + 1}
        </span>
        <button
          onClick={() => updateCurrent()}
          className="absolute  inset-0  items-center justify-center hidden group-hover:flex"
        >
          <Image
            src={determineIcon()}
            width={70}
            height={70}
            alt="play"
            className="min-w-[20px] min-h-[20px]"
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
      </td >
 
    
      <td className="px-6 py-4 overflow-auto ">{item.title.slice(0, 14) }</td>
      

  
    
      <td className="px-6 py-4">{item.playing}</td>
      <td className="px-6 py-4">{item.time}</td>
      <td className="px-0 py-4 text-right ">{item.album}</td>
    </tr>
  );
};

export default SongItem;
