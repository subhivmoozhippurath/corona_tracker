import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state name",
  initialState: {
    selectedState: "Kerala", // Track selected state
    selectedStateData: {
      Total: 50000,
      Active: 10000,
      Recovered: 38000,
      Deaths: 2000,
    }, // Store data related to the selected state
  },
  reducers: {
    setSelectedStateData: (state, action) => {
      state.selectedState = action.payload.stateName; // Store the selected state
      state.selectedStateData = action.payload.stateData; // Store the related data
    },
  },
});
export const { setSelectedStateData } = stateSlice.actions;
export default stateSlice.reducer;
