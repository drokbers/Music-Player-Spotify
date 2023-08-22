import Image from "next/image";

import { MichealTrack } from "@/assets/Images";
import Link from "next/link";

interface TrackProps {
  id: string;
}

const TrackList = ({ id }: TrackProps) =>{
  const musicData = [
    {
      id: 1,
      artist: "Micheal Jackson",
      albums: [
        {
          id: 1,
          title: "Thriller",
          songs: [
            {
              id: 1,
              title: "Billie Jean",
              playing: "1.040.811.084",
              time: "4:53",
              album: "Thriller 25 SupThrille",
            },
            {
              id: 2,
              title: "Thriller",
              playing: "714.036.264",
              time: "5:58",
              album: "Thriller",
            },
            {
              id: 3,
              title: "Beat It",
              playing: "676.555.480",
              time: "4:17",
              album: "Thriller",
            },
            {
              id: 4,
              title: "Wanna Be Startin' Somethin'",
              playing: "423.882.261",
              time: "6:02",
              album: "Thriller",
            },
            {
              id: 5,
              title: "The Girl Is Mine",
              playing: "332.651.986",
              time: "3:42",
              album: "Thriller",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      artist: "Nirvana",
      albums: [
        {
          id: 1,
          title: "Nevermind",
          songs: [
            {
              id: 1,
              title: "Smells Like Teen Spirit",
              playing: "1.306.109.658",
              time: "5:02",
              album: "Nevermind",
            },
            {
              id: 2,
              title: "Come as You Are",
              playing: "432.859.458",
              time: "3:38",
              album: "Nevermind",
            },
            {
              id: 3,
              title: "Lithium",
              playing: "359.148.980",
              time: "4:17",
              album: "Nevermind",
            },
            {
              id: 4,
              title: "In Bloom",
              playing: "357.875.185",
              time: "4:15",
              album: "Nevermind",
            },
            {
              id: 5,
              title: "Breed",
              playing: "221.111.126",
              time: "3:04",
              album: "Nevermind",
            },
          
          ],
        },
      ],
    },
  ];


  const artistData = musicData.find((artist) => artist.id === Number(id));


  return (
    <div className=" flex flex-col  max-w-full    h-full ">
      <div className="flex w-full   mt-5 text-lg justify-between text-escuro">
        <span>Popular</span>
        <Link href="#" className="hover:underline  text-link tracking-wider pointer-events-none"> See All </Link>
       
      </div>

      <div
        id="music-list"
        className="pt-3   max-h-full overflow-scroll  h-[400px] md:h-[300px]"
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
              <th scope="col" className="px-0 py-3">
                Time
              </th>
              <th scope="col" className=" text-right px-0 py-3">
                Album
              </th>
            </tr>
          </thead>
          <tbody className=" max-h-none">

          {artistData && artistData.albums.map((album) => (
    album.songs.map((song, index) => (
      <tr key={song.id}>
        <th className=" py-4">{index + 1}</th>
        <td className="px-3 py-4">
          <Image src={MichealTrack} width={40} height={40} alt="xxx" />
        </td>
        <td className="px-6 py-4">{song.title}</td>
        <td className="px-6 py-4">{song.playing}</td>
        <td className="px-0 py-4">{song.time}</td>
        <td className="px-0 py-4 text-right ">{song.album}</td>
      </tr>
    ))
))}


          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TrackList;
