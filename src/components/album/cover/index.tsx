import Image from "next/image";

import { verifiedIcon } from "@/assets/Icons";
import { Background, Micheal } from "@/assets/Images";

const Cover = () => {
  return (
    <div className="relative  w-full mt-6  ">
      <div className="w-[480px] max-w-full xl:w-[580px] h-[200px]">
        <Image src={Background} alt="x" fill={true} />
      </div>

      <div className="absolute top-1/2 left-12 " id="artist-information">
        <span className="flex gap-3 items-center  text-neutral text-sm">
          <Image src={verifiedIcon} width={30} height={30} alt="" />
          Verified Artist
        </span>
        <span className="  text-4xl  text-escuro">Michael Jackson</span>
      </div>

      <div className="absolute h-1/2  w-2/5 top-1/2 right-0" id="artist-photo">
        <Image src={Micheal} layout="fill" alt="wallpaper" />
      </div>
    </div>
  );
};
export default Cover;
