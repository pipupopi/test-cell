import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    NEXT_PAGE: (state) => {
      state.page += 1;
    },
    PREV_PAGE: (state) => {
      state.page -= 1;
    },
    RESET_PAGES: (state) => {
      state.page = 1;
    },
  },
});

export const { NEXT_PAGE, PREV_PAGE, RESET_PAGES } =
  pageSlice.actions;
