import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./data";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});
