import axiosInstance from "./axiosInstance";

export const createPaymentOrder = async (amount) => {
  const response = await axiosInstance.post("/payments/create-order", {
    amount,
  });

  return response.data;
};

export const verifyPayment = async (paymentData) => {
  const response = await axiosInstance.post("/payments/verify", paymentData);

  return response.data;
};
