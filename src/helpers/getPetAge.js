const getPlural = (count, singular, plural = `${singular}s`) => {
  return count === 1 ? singular : plural;
};

export const getPetAge = dateString => {
  const [day, month, year] = dateString.split('.');
  const inputDate = new Date(`${year}-${month}-${day}`);
  const today = new Date();

  const yearDiff = today.getFullYear() - inputDate.getFullYear();
  const monthDiff = today.getMonth() - inputDate.getMonth();
  const dayDiff = today.getDate() - inputDate.getDate();

  if (isNaN(yearDiff) || isNaN(monthDiff)) {
    return '';
  } else if (yearDiff === 0 && monthDiff === 0) {
    return `${dayDiff} ${getPlural(dayDiff, 'day')}`;
  } else {
    let totalMonthDiff = yearDiff * 12 + monthDiff;
    if (dayDiff < 0) {
      totalMonthDiff--;
    }

    if (totalMonthDiff === 0 && dayDiff === 0) {
      return `today`;
    } else if (totalMonthDiff < 1) {
      return `${dayDiff} ${getPlural(dayDiff, 'day')}`;
    } else if (totalMonthDiff < 12) {
      return `${totalMonthDiff} ${getPlural(totalMonthDiff, 'month')}`;
    } else if (totalMonthDiff === 12 && dayDiff === 0) {
      return `1 year`;
    } else if (totalMonthDiff > 12 && totalMonthDiff % 12 === 0 && dayDiff === 0) {
      return `${totalMonthDiff / 12} ${getPlural(totalMonthDiff / 12, 'year')}`;
    } else {
      const years = Math.floor(totalMonthDiff / 12);
      const months = totalMonthDiff % 12;
      return `${years} ${getPlural(years, 'year')} ${months} ${getPlural(months, 'month')}`;
    }
  }
};
