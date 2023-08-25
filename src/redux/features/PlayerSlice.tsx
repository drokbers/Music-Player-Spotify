import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Song } from "@/types";

interface SongWithAllSongs {
  allSongs: Song[];
  selectedId: number;
}

interface PlayerState {
  current: Song | null;
  allSongs: Song[];
  selectedId: number | null;
  controls: any;
  playing: boolean;
}

const initialState: PlayerState = {
  current: null,
  allSongs: [],
  selectedId: null,
  controls: null,
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
    setControls: (state, action: PayloadAction<any>) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
  },
});

export const { setCurrent, setControls, setPlaying } = playerSlice.actions;
export default playerSlice.reducer;
