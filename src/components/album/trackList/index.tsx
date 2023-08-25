import Image from "next/image";
import Link from "next/link";

import SongItem from "./SongItem";
import musicData from "../MusicData";


interface TrackProps {
  id: string;
}

const TrackList = ({ id }: TrackProps) => {



  const artistData = musicData(id)

  return (
    <div className=" flex flex-col  max-w-full  ">
      <div className="flex w-full   mt-5 text-lg justify-between text-escuro">
        <span>Popular</span>
        <Link
          href="#"
          className="hover:underline  text-link tracking-wider pointer-events-none"
        >
          See All
        </Link>
      </div>

      <div
        id="music-list"
        className="relative pt-3    max-h-full  overflow-auto  h-[350px]"
      >
        <table className="text-left w-full text-bej">
          <thead className="uppercase">
            <tr>
              <th scope="col" className=" py-3">
                #
              </th>
              <th scope="col" className="px-3 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Playing
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className=" text-right px-0 py-3">
                Album
              </th>
            </tr>
          </thead>
          <tbody className=" max-h-none">
            {artistData &&
              artistData.albums.map((album) =>
                album.songs.map((song, index) => (
                  <SongItem item={song} key={index} index={index} />
                ))
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TrackList;
