import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./data";
import { pageSlice } from "./page";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    pages: pageSlice.reducer,
  },
});
