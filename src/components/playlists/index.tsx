import Header from "../header";
import Collections from "./collections";

const Playlists = () => {
  const PopulerMusics = [

    {
      id: 5,
      artist: "Queen",
      albumName: "A Night at the Opera",
      description: "Classic Rock",
      image: "https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146",
      type: "album",
      active: false,
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
        id: 1,
        artist: "Michael Jackson",
        albumName: "Thriller",
        description: "Original Soundtrack",
        image: "https://i.imgur.com/1swspRc.jpeg",
        type: "album",
        active: true,
        src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
      },
      {
        id: 2,
        artist: "Nirvana",
        albumName: "Nevermind",
        description: "Grunge",
        image: "https://i.imgur.com/zRrX7r4.jpeg",
        type: "album",
        active: true,
        src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
      },
    {
      id: 3,
      artist: "John Lennon",
      albumName: "Imagine",
      description: "Soft Rock",
      image: "https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146",
      type: "album",
      active: false,
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
      id: 4,
      artist: "Bob Dylan",
      albumName: "Highway 61 Revisited",
      description: "Folk Rock",
      image: "https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146",
      type: "album",
      active: false,
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },


  ];

  const RockMusics = [
    {
      id: 1,
      artist: "Led Zeppelin",
      albumName: "IV",
      description: "Hard Rock",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
      id: 2,
      artist: "The Rolling Stones",
      albumName: "Exile on Main St.",
      description: "Rock and Roll",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
      id: 3,
      artist: "AC/DC",
      albumName: "Back in Black",
      description: "Hard Rock",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://example.com/acdc-back-in-black.mp3",
    },
    {
      id: 4,
      artist: "Pink Floyd",
      albumName: "The Dark Side of the Moon",
      description: "Progressive Rock",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://example.com/pink-floyd-dark-side.mp3",
    },
    {
      id: 5,
      artist: "The Who",
      albumName: "Who's Next",
      description: "Rock",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://example.com/the-who-whos-next.mp3",
    },
  ];

  const JazMusics = [
    {
      id: 1,
      artist: "Led Zeppelin",
      albumName: "IV",
      description: "Hard Rock",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
      id: 2,
      artist: "The Rolling Stones",
      albumName: "Exile on Main St.",
      description: "Rock and Roll",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
      id: 3,
      artist: "AC/DC",
      albumName: "Back in Black",
      description: "Hard Rock",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://example.com/acdc-back-in-black.mp3",
    },
    {
      id: 4,
      artist: "Pink Floyd",
      albumName: "The Dark Side of the Moon",
      description: "Progressive Rock",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://example.com/pink-floyd-dark-side.mp3",
    },
    {
      id: 5,
      artist: "The Who",
      albumName: "Who's Next",
      description: "Rock",
      image:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "album",
      active: false,
      src: "https://example.com/the-who-whos-next.mp3",
    },
  ];

  return (
    <div className="flex  flex-col w-full md:w-10/12 gap-5   pl-5 pr-5 sm:pl-20 sm:pr-20  bg-gradient-to-t from-stone to-linearRed">
      <Header />
      <div className="overflow-auto">
        <Collections title="Populers" items={PopulerMusics} />
        <Collections title="Rock Bands" items={RockMusics} />
        <Collections title="Jaz" items={JazMusics} />
      </div>
    </div>
  );
};
export default Playlists;
