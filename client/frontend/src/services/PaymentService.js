const API_URL = "http://localhost:3000/api/payments";

class PaymentService {
  async createPayment(paymentData) {
    const response = await fetch(`${API_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    return response.json();
  }

  async getPaymentStatus(paymentId) {
    const response = await fetch(`${API_URL}/${paymentId}`);
    return response.json();
  }
}

export default new PaymentService();
