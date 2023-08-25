import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Song {
  id: number;
  title: string;
  playing: string;
  time: string;
  album: string;
  src: string;
}

interface PlayerState {
  current: Song | null;
  controls: any;
  playing: boolean;
}


const initialState: PlayerState = {
  current: null,
  controls: null,
  playing: false,
};


export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<Song | null>) => {
      state.current = action.payload;
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
