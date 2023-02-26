import React from 'react';
import { useState } from 'react';
// import { useFormContext } from 'react-hook-form';
// import { Dayjs } from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import DatePicker from 'react-datepicker';

export const Calendar = ({ petBirth }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      // clearIcon={null}
      // calendarIcon={<ImgClose src={celendar} alt="" />}
      format="dd.MM.yyyy"
      selected={petBirth}
      maxDate={new Date()}
      yearPlaceholder={'years'}
      monthPlaceholder={'months'}
      dayPlaceholder={'days'}
      id="petBirth"
      name="petBirth"
      value={petBirth}
      onChange={value => {
        if (!value) {
          return;
        }
        // formik.setFieldValue('birthday', new Date(Date.parse(value)));
      }}
    />
  );
};

// export const MaterialUIPickers = () => {
//   const [value, setValue] = useState(null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         id="petBirth"
//         value={value}
//         inputFormat="DD.MM.YYYY"
//         minDate={'1900-01-01'}
//         disableFuture={true}
//         onChange={newValue => {
//           setValue(newValue);
//         }}
//         renderInput={params => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// };
