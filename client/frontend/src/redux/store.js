import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import busReducer from "./busSlice";
import bookingReducer from "./bookingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    buses: busReducer,
    bookings: bookingReducer,
  },
});

export default store;
