const API_URL = "http://localhost:8080/barbershopbookingapi/barber-service";

export const getAllBarberServices = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to retrieve barber services.");
  }

  return data;
};
