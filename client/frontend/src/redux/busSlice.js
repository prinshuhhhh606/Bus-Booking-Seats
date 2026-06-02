import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buses: [],
  loading: false,
  selectedBus: null,
};

const busSlice = createSlice({
  name: "buses",
  initialState,

  reducers: {
    fetchBusStart: (state) => {
      state.loading = true;
    },

    fetchBusSuccess: (state, action) => {
      state.loading = false;
      state.buses = action.payload;
    },

    fetchBusFailure: (state) => {
      state.loading = false;
    },

    setSelectedBus: (state, action) => {
      state.selectedBus = action.payload;
    },
  },
});

export const {
  fetchBusStart,
  fetchBusSuccess,
  fetchBusFailure,
  setSelectedBus,
} = busSlice.actions;

export default busSlice.reducer;
