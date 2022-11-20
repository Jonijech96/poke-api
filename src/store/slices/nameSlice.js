import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const nameSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeName: (state, action) => {
      const userName = action.payload;
      return userName;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeName } = nameSlice.actions;

export default nameSlice.reducer;
