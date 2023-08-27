import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Song, PlayerState } from "@/types";

interface SongWithAllSongs {
  allSongs: Song[];
  selectedId: number;
}


const initialState: PlayerState = {
  current: null,
  allSongs: [],
  selectedId: null,
  playing: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<SongWithAllSongs>) => {
      const { allSongs, selectedId } = action.payload;
      state.allSongs = allSongs;
      state.selectedId = selectedId;
    },

    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
  },
});

export const { setCurrent, setPlaying } = playerSlice.actions;
export default playerSlice.reducer;
