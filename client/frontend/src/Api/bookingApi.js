import axiosInstance from "./axiosInstance";

export const createBooking = async (bookingData) => {
  const response = await axiosInstance.post("/bookings/create", bookingData);

  return response.data;
};

export const getMyBookings = async () => {
  const response = await axiosInstance.get("/bookings/my-bookings");
  return response.data;
};

export const cancelBooking = async (id) => {
  const response = await axiosInstance.delete(`/bookings/${id}`);

  return response.data;
};
