import axiosInstance from "./axiosInstance";

export const addBus = async (busData) => {
  const response = await axiosInstance.post("/admin/buses", busData);

  return response.data;
};

export const updateBus = async (id, data) => {
  const response = await axiosInstance.put(`/admin/buses/${id}`, data);

  return response.data;
};

export const deleteBus = async (id) => {
  const response = await axiosInstance.delete(`/admin/buses/${id}`);

  return response.data;
};

export const getDashboardStats = async () => {
  const response = await axiosInstance.get("/admin/dashboard");

  return response.data;
};
