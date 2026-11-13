const API_URL = "http://localhost:8080/barbershopbookingapi/employee";

export const get4MatchedEmployee = async (firstName, lastName) => {
  const params = new URLSearchParams({ firstName, lastName });
  const response = await fetch(`${API_URL}/search?${params}`);
  const data = await response.json();

  if (!response.ok) throw new Error("Failed to retrieve employees");

  return data;
};
