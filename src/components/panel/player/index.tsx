import Image from "next/image";

import { MichealPoster } from "@/assets/Images";
import {
  RepeatIcon,
  RandomIcon,
  BackIcon,
  PlayIcon,
  NextIcon,
} from "@/assets/Icons";
const Player = () => {
  return (
    <div className="flex  flex-col pt-4  rounded-2xl gap-2 items-center bg-bloodRed w-[250px] text-escuro h-[320px]">
      <span className="text-sm">Now Playing</span>
      <Image
        className="rounded-2xl"
        src={MichealPoster}
        width={200}
        height={120}
        alt="xxx"
      />
      <div className="flex flex-col items-center">
        <span className="text-lg">Beat It</span>
        <span className="text-bej">Michael Jackson</span>
      </div>

      <div className="flex  gap-2">
        <span>2:15</span>
        <span>-----------------</span>
        <span>4:18</span>
      </div>
      <div className="flex flex-row  gap-2 items-center justify-between">
        <Image width={20} height={20} alt="" src={RepeatIcon} />
        <Image width={30} height={30} alt="" src={BackIcon} />
        <div className="flex rounded-full items-center justify-center bg-bordo w-10 h-10">
          <Image width={30} height={30} alt="" src={PlayIcon} />
        </div>

        <Image width={30} height={30} alt="" src={NextIcon} />
        <Image width={20} height={20} alt="" src={RandomIcon} />
      </div>
    </div>
  );
};
export default Player;
