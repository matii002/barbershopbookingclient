const API_URL = "http://localhost:8080/barbershopbookingapi/status";

export const getStatuses = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  if (!response.ok) throw new Error("Failed to retrieve statuses");

  return data;
};
