import Notification from "./notification";
import RecentPlaylist from "./recentPlaylist";
import Player from "./player";
import BottomNav from "../bottomNav";

const Panel = () => {
  return (
    <div className="relative hidden md:flex flex-col  pr-6 pl-6  w-5/12 xl:w-3/12  gap-2 items-center bg-gradient-to-t from-black100 to-darkRed">
      <Notification />
      <RecentPlaylist />
     <Player />
     
    </div>
  );
};

export default Panel;
