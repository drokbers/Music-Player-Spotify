import Image from 'next/image'

import { playlistNotiIcon, musicIcon } from "@/assets/Icons";

const Notification = () => {
  return (
    <div className="flex w-[250px]  flex-col gap-3 pt-11 text-escuro">
      <span className="text-xl text-escuro">Notifications</span>
      <div className="flex  flex-col  overflow-scroll gap-2 h-[150px]">
        <div className="flex flex-row gap-3">
          
          <Image className="rounded-2xl" src={playlistNotiIcon}  width={60}
      height={60}
      alt="playlist NotiIcon"
    />
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-lg">Playlist Added</span>{" "}
            <span className="text-sm">200 songs</span>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          
          <Image className="rounded-2xl" src={musicIcon}  width={60}
      height={60}
      alt="musicIcon"
    />
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-lg">Playlist Added</span>{" "}
            <span className="text-sm">200 songs</span>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          
          <Image className="rounded-2xl" src={musicIcon}  width={60}
      height={60}
      alt="musicIcon"
    />
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-lg">Playlist Added</span>{" "}
            <span className="text-sm">200 songs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
