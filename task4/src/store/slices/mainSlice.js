import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textInput: "",
};

const mainSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    updateInputText: (state, action) => {
      state.textInput = action.payload;
    },
  },
});

export default mainSlice.reducer;

export const { updateInputText } = mainSlice.actions;
