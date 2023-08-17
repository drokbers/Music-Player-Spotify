import Image from 'next/image'

import {
  trendsIcon,
  homeIcon,
  discoveryIcon,
  libraryIcon,
  playlistIcon,
  dailyMixIcon,
  podcastIcon,
} from "@/assets/Icons";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col  text-sm w-2/12 bg-stone text-neutral pl-12 gap-8">
      <span className="text-3xl pt-8 ">DreamMusic</span>
      <div id="menu" className="flex flex-col gap-3  ">
        <span className="text-base">Menu</span>
        <span className="flex gap-3 items-center">
          <Image src={homeIcon}  width={22} height={22} alt="xxx" />
          Home
        </span>
 
        <span className="flex items-center gap-3">
          <Image src={trendsIcon}  width={22} height={22} alt="xxx" />
          Trends
        </span>
        
        <span className="flex gap-3 items-center">
          <Image src={libraryIcon}  width={22} height={22} alt="xxx" />
          Library
        </span>
        <span className="flex gap-3 items-center">
          <Image src={discoveryIcon}  width={22} height={22} alt="xxx" />
          Discover
        </span>
      </div>
      <div id="Discover" className="flex flex-col  gap-3">
        <span className="text-base">Discover</span>
        <span className="flex gap-3 items-center">
          <Image src={playlistIcon}  width={22} height={22} alt="xxx" />
          Playlists
        </span>
        <span className="flex gap-3 items-center">
          <Image src={podcastIcon}  width={22} height={22} alt="xxx" />
          Podcasts
        </span>
        <span className="flex gap-3 items-center">
          <Image src={dailyMixIcon}  width={22} height={22} alt="xxx" />
          Daily Mix
        </span>
      </div>
      <div id="collection" className="flex flex-col gap-3">
        <span className="text-base">Your Collection</span>
        <span className="flex gap-3 items-center">
          {" "}
          <Image src={dailyMixIcon}   width={22} height={22} alt="xxx" />
          Liked Songs
        </span>
      </div>
      <div id="General" className="flex flex-col gap-3">
        <span className="text-base">General</span>
        <span className="flex gap-3 items-center">
          {" "}
          <Image src={dailyMixIcon}  width={22} height={22} alt="xxx" />
          Settings
        </span>
        <span className="flex gap-3 items-center">
          {" "}
          <Image src={dailyMixIcon} style={{ width: 22, height: 22 }}  alt="" />
          Log Out
        </span>
      </div>
    </div>
  );
};
export default Dashboard;
