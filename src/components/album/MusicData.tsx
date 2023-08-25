const musicData = (id:string) => {

  const data =        [
    {
      id: 1,
      artist: "Micheal Jackson",
      background: "https://i.imgur.com/IqDNDl6.png",      
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
              album: "Thrille",
              src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
              cover: "https://i.imgur.com/1swspRc.jpeg",
              artist: "Micheal Jackson",
             
    
            },
            {
              id: 2,
              title: "Thriller",
              playing: "714.036.264",
              time: "5:58",
              album: "Thriller",
              src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
              cover: "https://i.imgur.com/1swspRc.jpeg",
              artist: "Micheal Jackson",
             
            },
            {
              id: 3,
              title: "Beat It",
              playing: "676.555.480",
              time: "4:17",
              album: "Thriller",
              src: "https://freesound.org/data/previews/612/612087_1648170-lq.mp3",
              cover: "https://i.imgur.com/1swspRc.jpeg",
              artist: "Micheal Jackson",
             
            },
            {
              id: 4,
              title: "Wanna Be Startin' Somethin'",
              playing: "423.882.261",
              time: "6:02",
              album: "Thriller",
              src: "https://freesound.org/data/previews/612/612085_28867-lq.mp3",
              cover: "https://i.imgur.com/1swspRc.jpeg",
              artist: "Micheal Jackson",
             
            },
            {
              id: 5,
              title: "The Girl Is Mine",
              playing: "332.651.986",
              time: "3:42",
              album: "Thriller",
              src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
              cover: "https://i.imgur.com/1swspRc.jpeg",
              artist: "Micheal Jackson",
             
            },
          ],
        },
      ],
    },
    {
      id: 2,
      artist: "Nirvana",
      background: "https://i.imgur.com/b2erTzL.png",
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
              src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
              
            
            },
            {
              id: 2,
              title: "Come as You Are",
              playing: "432.859.458",
              time: "3:38",
              album: "Nevermind",
              src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
            
            },
            {
              id: 3,
              title: "Lithium",
              playing: "359.148.980",
              time: "4:17",
              album: "Nevermind",
              src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
             
            },
            {
              id: 4,
              title: "In Bloom",
              playing: "357.875.185",
              time: "4:15",
              album: "Nevermind",
              src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
              
            },
            {
              id: 5,
              title: "Breed",
              playing: "221.111.126",
              time: "3:04",
              album: "Nevermind",
              src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
              
            },
          ],
        },
      ],
    },
  ]

  const artistData = data.find((artist: any) => artist.id === Number(id));

  return artistData;
}

export default musicData;