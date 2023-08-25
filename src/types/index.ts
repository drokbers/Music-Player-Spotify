
export interface Song {
  id: number;
  title: string;
  playing: string;
  time: string;
  album: string;
  src: string;
  cover: string;
  artist: string;
}


export interface Album {
  id: number;
  title: string;
  songs: Song[];
}


export interface Artist {
  id: number;
  name: string;
  background: string;
  albums: Album[];
}


export interface SongItemProps {
  item: Song;
  index: number;
  allSongs: Song[];
}
