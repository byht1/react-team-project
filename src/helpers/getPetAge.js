
const getPlural = (count, singular, plural = `${singular}s`) => {
  return count === 1 ? singular : plural;
};

export const getPetAge = dateString => {
  const [day, month, year] = dateString.split('.');
  const inputDate = new Date(`${year}-${month}-${day}`);
  const today = new Date();

  const yearDiff = today.getFullYear() - inputDate.getFullYear();
  const monthDiff = today.getMonth() - inputDate.getMonth();

  if (isNaN(yearDiff) || isNaN(monthDiff)) {
    return '';
  } else if (yearDiff === 0) {
    return `${monthDiff} ${getPlural(monthDiff, 'month')}`;
  } else if (yearDiff === 1 && monthDiff < 0) {
    return `1 year`;
  } else if (yearDiff === 1 && monthDiff === 0) {
    return `1 year`;
  } else if (yearDiff > 1 && monthDiff < 0) {
    return `${yearDiff} ${getPlural(yearDiff, 'year')}`;
  } else {
    return `${yearDiff} ${getPlural(yearDiff, 'year')} ${monthDiff} ${getPlural(
      monthDiff,
      'month'
    )}`;
  }
};
