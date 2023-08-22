import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  value: PlayerState;
};

type PlayerState = {
  current: boolean;
  controls: boolean;
  playing: boolean;
};

const initialState = {
  value: {
    current: false,
    controls: false,
    playing: false,
  },
};


export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<boolean>) => {
      state.value.current = action.payload;
    },
    setControls: (state, action: PayloadAction<boolean>) => {
      state.value.current = action.payload;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.value.current = action.payload;
    },
  },
});

export const { setCurrent, setControls, setPlaying } = playerSlice.actions;

export default playerSlice.reducer;
