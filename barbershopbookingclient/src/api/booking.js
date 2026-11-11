const API_URL = "http://localhost:8080/barbershopbookingapi/booking";

export const getBookings = async () => {
  const response = await fetch(`${API_URL}/all`);
  return response.json();
};

export const getBookingById = async (bookingId) => {
  const response = await fetch(`${API_URL}/${bookingId}`);
  return response.json();
};

export const deleteBooking = async (bookingId) => {
  const response = await fetch(`${API_URL}/${bookingId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete booking");
  }

  return response.text();
};

export const updateBooking = async (bookingId, updatedData) => {
  const response = await fetch(`${API_URL}/${bookingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  return response.json();
};
