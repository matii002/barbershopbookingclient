const API_URL = "http://localhost:8080/barbershopbookingapi/client";

export const get4MatchedClient = async (firstName, lastName) => {
  const params = new URLSearchParams({ firstName, lastName });
  const response = await fetch(`${API_URL}?${params}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to retrieve clients.");
  }

  return data;
};
