import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "query",
  initialState: {
    searchText: "",
    appliedContentTypes: [],
    selectedGenres: [],
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setAppliedContentTypes: (state, action) => {
      state.appliedContentTypes = action.payload;
    },
    setSelectedGenres: (state, action) => {
      state.selectedGenres = action.payload;
    },
  },
});

export const { setSearchText, setAppliedContentTypes, setSelectedGenres } =
  slice.actions;

export const selectQuerySearchText = (state) => state.query.searchText;
export const selectQueryAppliedContentTypes = (state) =>
  state.query.appliedContentTypes;
export const selectQuerySelectedGenres = (state) => state.query.selectedGenres;

export default slice.reducer;
