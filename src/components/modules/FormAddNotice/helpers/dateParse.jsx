export const dateParse = dateStr => {
  let [day, month, year] = dateStr.split('.');
  let newDateStr = `${year}-${month}-${day}`;
  let data = new Date(newDateStr);

  // Создайте массив с названиями месяцев на английском языке
  let monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Получите отформатированную дату
  let formattedDate = data.toString();

  // Замените название месяца на его аббревиатуру
  formattedDate = formattedDate.replace(formattedDate.substr(4, 3), monthNames[data.getMonth()]);
  return formattedDate;
};
