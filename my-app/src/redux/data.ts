import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const dataSlice = createSlice({
  name: "CellData",
  initialState,
  reducers: {
    SET_CURRENT_DATA: (state, action) => {
      state.currentCellData = action.payload;
    },
    SET_DATA: (state, action) => {
      state.cellData = action.payload;
    },
  },
});

export const { SET_DATA, SET_CURRENT_DATA } =
  dataSlice.actions;
