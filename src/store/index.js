import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./slices/nameSlice";

export const store = configureStore({
  reducer: {
    name: nameSlice,
  },
});
