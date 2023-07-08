import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "query",
  initialState: {
    searchText: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = slice.actions;

export const selectQuerySearchText = (state) => state.query.searchText;

export default slice.reducer;
