import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  loading: false,
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,

  reducers: {
    bookingStart: (state) => {
      state.loading = true;
    },

    bookingSuccess: (state, action) => {
      state.loading = false;
      state.bookings.push(action.payload);
    },

    bookingFailure: (state) => {
      state.loading = false;
    },

    setBookings: (state, action) => {
      state.bookings = action.payload;
    },

    cancelBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking._id !== action.payload,
      );
    },
  },
});

export const {
  bookingStart,
  bookingSuccess,
  bookingFailure,
  setBookings,
  cancelBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
