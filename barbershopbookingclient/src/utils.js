export const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleString();
};

export const toLocalDataTime = (d) => {
  const localDateString = d.toLocaleDateString("sv-SE");
  const localTimeString = d.toLocaleTimeString("sv-SE");

  return `${localDateString}T${localTimeString}`;
};
