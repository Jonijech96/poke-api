import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoadingSlice";
import nameSlice from "./slices/nameSlice";

export const store = configureStore({
  reducer: {
    name: nameSlice,
    isLoading: isLoadingSlice,
  },
});
