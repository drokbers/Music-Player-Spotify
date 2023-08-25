const musicData = (id: string) => {
  const data = [
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
              album: "x",
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
              src: "https://drokber-spotify-clone.s3.amazonaws.com/musics/Micheal_Jackson/y2mate.com+-+TMass++Rain+Man++Follow+feat+Vikki+Gilmore+NCS+Release.mp3",
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
              src: "https://drokber-spotify-clone.s3.us-east-1.amazonaws.com/musics/Micheal_Jackson/y2mate.com%20-%20Asketa%20%20Natan%20Chaim%20%20More%20NCS%20Release.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDmQF2qgqRY3oOtjcWlBQg%2BMpm1jgdTXFHoRJ8s40Kv%2FQIgPpJjnftcVgIo2sbAIpATusgOrV0FGkEI7UP4vRMYLNQq5AIIURAEGgw0NzA2NTgwMzA0NDciDIyjAlNDBNZA1kkG%2BirBArwG47HvPxLMbFUoXJu9abNCqH0Qp5HHh0URGNg5nNAzQ9zuJmC%2B04FEM4h5l7CuqitToFZ4itg3OPyAqScBo7ZNdwf7Zw9DBuFcGTjZzIZQ%2Fh%2BTzjIZuxE%2F%2BVM8bQC13iVM%2BRlRkrKIZ0tmJ4hXeQLsxF0fML85zR1V6Y292FSTXRw0mKN1P1bQaUymikPL3cPCiQ72jOMlrd4b8sDkfsqhbQ4VLOzRLiyiqNYSZBstSNlm0p4saC6uW6d3SmF0aRAl2ZspsVVpXonVNu916PqKL7VqKPosfcjJjt1A0P9WGk8e4vfaq7b%2FNuO5Cxg7bOnG3uWsEAdp6CxiSCLCR4ZBCWpzB56%2F5R28YJl1G2haQGhcl7acmzSupjkpj2WukWcvDzA94gKzzYS67NBEvbSA85nP%2BKMi55VxVeQQRGYJOTCE8aSnBjqzAlbfXo6WdCAb%2FE3nRNnDjgJPrjhm9biixr%2BK4Adf1SigZgd1YfxkIWtZ6M3CbzTboEW3AzqNgzS7quFEzvLZeDj%2Fwh2fu8u35XFXA5mrPrK50uXkaY2YDTP83k1Q%2BGuMCQwkOcXfrSHZ6Hd06X%2Fh2DVDtJqvKPKtgTD9Vwp0GStNQL4vX6KZIrjiXiHGiNPU5DX%2F8TGRMkLz0CyfFw%2Fn8qZvKX3IoXoU4CMLz%2BtqFHwP8zuzqYDpA2pSXdhdPyR8fINqKsok0xix4KxuuboA82NPCfW9gdsxfIJab3fkkLo4fdrY1L6rEjccoJgLRCDMVECzozeSmJXShMHjlXtU17AgTwtgK5tTUu0xlzrelTLSabHrKdqX%2Fvt8MAjS0waQbGL4yL72%2BXtpfcd2tTejs8j%2Fy5E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230825T232830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW3FLHTNXXXL4QGEL%2F20230825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7d5d42c786a515b78a9a6c92cb1c03f3c9066805b6ed72cce421e4aadfafe4ff",
              cover: "https://i.imgur.com/1swspRc.jpeg",
              artist: "Micheal Jackson",
            },
            {
              id: 5,
              title: "The Girl Is Mine",
              playing: "332.651.986",
              time: "3:42",
              album: "Thriller",
              src: "https://drokber-spotify-clone.s3.amazonaws.com/musics/Micheal_Jackson/song1.mp3",
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
              src: "https://freesound.org/data/previews/612/612087_1648170-lq.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
              artist: "Nirvana",
            },
            {
              id: 2,
              title: "Come as You Are",
              playing: "432.859.458",
              time: "3:38",
              album: "Nevermind",
              src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
              artist: "Nirvana",
            },
            {
              id: 3,
              title: "Lithium",
              playing: "359.148.980",
              time: "4:17",
              album: "Nevermind",
              src: "https://drokber-spotify-clone.s3.amazonaws.com/musics/Micheal_Jackson/y2mate.com+-+TMass++Rain+Man++Follow+feat+Vikki+Gilmore+NCS+Release.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
              artist: "Nirvana",
            },
            {
              id: 4,
              title: "In Bloom",
              playing: "357.875.185",
              time: "4:15",
              album: "Nevermind",
              src: "https://drokber-spotify-clone.s3.us-east-1.amazonaws.com/musics/Micheal_Jackson/y2mate.com%20-%20Asketa%20%20Natan%20Chaim%20%20More%20NCS%20Release.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDmQF2qgqRY3oOtjcWlBQg%2BMpm1jgdTXFHoRJ8s40Kv%2FQIgPpJjnftcVgIo2sbAIpATusgOrV0FGkEI7UP4vRMYLNQq5AIIURAEGgw0NzA2NTgwMzA0NDciDIyjAlNDBNZA1kkG%2BirBArwG47HvPxLMbFUoXJu9abNCqH0Qp5HHh0URGNg5nNAzQ9zuJmC%2B04FEM4h5l7CuqitToFZ4itg3OPyAqScBo7ZNdwf7Zw9DBuFcGTjZzIZQ%2Fh%2BTzjIZuxE%2F%2BVM8bQC13iVM%2BRlRkrKIZ0tmJ4hXeQLsxF0fML85zR1V6Y292FSTXRw0mKN1P1bQaUymikPL3cPCiQ72jOMlrd4b8sDkfsqhbQ4VLOzRLiyiqNYSZBstSNlm0p4saC6uW6d3SmF0aRAl2ZspsVVpXonVNu916PqKL7VqKPosfcjJjt1A0P9WGk8e4vfaq7b%2FNuO5Cxg7bOnG3uWsEAdp6CxiSCLCR4ZBCWpzB56%2F5R28YJl1G2haQGhcl7acmzSupjkpj2WukWcvDzA94gKzzYS67NBEvbSA85nP%2BKMi55VxVeQQRGYJOTCE8aSnBjqzAlbfXo6WdCAb%2FE3nRNnDjgJPrjhm9biixr%2BK4Adf1SigZgd1YfxkIWtZ6M3CbzTboEW3AzqNgzS7quFEzvLZeDj%2Fwh2fu8u35XFXA5mrPrK50uXkaY2YDTP83k1Q%2BGuMCQwkOcXfrSHZ6Hd06X%2Fh2DVDtJqvKPKtgTD9Vwp0GStNQL4vX6KZIrjiXiHGiNPU5DX%2F8TGRMkLz0CyfFw%2Fn8qZvKX3IoXoU4CMLz%2BtqFHwP8zuzqYDpA2pSXdhdPyR8fINqKsok0xix4KxuuboA82NPCfW9gdsxfIJab3fkkLo4fdrY1L6rEjccoJgLRCDMVECzozeSmJXShMHjlXtU17AgTwtgK5tTUu0xlzrelTLSabHrKdqX%2Fvt8MAjS0waQbGL4yL72%2BXtpfcd2tTejs8j%2Fy5E%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230825T232830Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW3FLHTNXXXL4QGEL%2F20230825%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7d5d42c786a515b78a9a6c92cb1c03f3c9066805b6ed72cce421e4aadfafe4ff",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
              artist: "Nirvana",
            },
            {
              id: 5,
              title: "Breed",
              playing: "221.111.126",
              time: "3:04",
              album: "Nevermind",
              src: "https://drokber-spotify-clone.s3.amazonaws.com/musics/Micheal_Jackson/song1.mp3",
              cover: "https://i.imgur.com/zRrX7r4.jpeg",
              artist: "Nirvana",
            },
          ],
        },
      ],
    },
  ];

  const artistData = data.find((artist: any) => artist.id === Number(id));

  return artistData;
};

export default musicData;
