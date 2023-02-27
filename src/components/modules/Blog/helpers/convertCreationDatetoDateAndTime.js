export const convertCreationDateToDateAndTime = date => {
  const convertedDate = new Date(date);
  return `${convertedDate.toLocaleDateString('uk')} | ${convertedDate.toLocaleTimeString('uk', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
};
