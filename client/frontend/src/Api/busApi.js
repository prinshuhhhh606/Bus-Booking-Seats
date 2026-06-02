import axiosInstance from "./axiosInstance";

export const getAllBuses = async () => {
  const response = await axiosInstance.get("/buses");
  return response.data;
};

export const searchBuses = async (from, to, date) => {
  const response = await axiosInstance.get(
    `/buses/search?from=${from}&to=${to}&date=${date}`,
  );

  return response.data;
};

export const getBusById = async (id) => {
  const response = await axiosInstance.get(`/buses/${id}`);
  return response.data;
};
