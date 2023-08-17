import Image from "next/image";

import { playlistBackground } from "@/assets/Images";

const RecentPlaylist = () => {
  return (
    <div className="flex flex-col text-escuro pt-2   pb-4 gap-3">
      <span className="text-xl">Recent Playlists</span>
      <div className="flex flex-row gap-3  w-[250px]  overflow-x-scroll text-xs ">
        <div className="flex flex-col ">
          <Image
            width={100}
            height={100}
            alt="Picture of the author"
            src={playlistBackground}
          />
          <span>playlist name</span>
        </div>
        <div className="flex flex-col  ">
        <Image
            width={100}
            height={100}
            alt="Picture of the author"
            src={playlistBackground}
          />
          <span>playlist name</span>
        </div>
        <div className="flex flex-col  ">
             <Image
            width={100}
            height={100}
            alt="Picture of the author"
            src={playlistBackground}
          />
          <span>playlist name</span>
        </div>
        {/* <div className="flex flex-col  ">
          <img style={{ width: 100, height: 100 }} src={playlistBackground} />
          <span>playlist name</span>
        </div>
        <div className="flex flex-col  ">
          <img style={{ width: 100, height: 100 }} src={playlistBackground} />
          <span>playlist name</span>
        </div> */}
      </div>
    </div>
  );
};

export default RecentPlaylist;
