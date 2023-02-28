export const dateConverter = date => {
  // console.log(date);
  const dateObject = new Date(date);

  const yyyy = dateObject.getFullYear();
  let mm = dateObject.getMonth() + 1; // Months start at 0!
  let dd = dateObject.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return dd + '.' + mm + '.' + yyyy;
};
