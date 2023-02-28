import date from 'date-and-time';

export function validateDate(value) {
  const pattern = 'DD.MM.YYYY';
  const minDate = new Date('1900-01-01');
  const maxDate = new Date();

  const parsedDate = date.parse(value, pattern);
  if (isNaN(parsedDate.getTime())) {
    return false;
  }

  const userDate = new Date(value.split('.').reverse().join('-'));

  const minDifference = date.subtract(userDate, minDate).toDays();
  const difference = date.subtract(userDate, maxDate).toDays();

  if (difference > 0 || minDifference < 0) {
    return false;
  }

  return true;
}
