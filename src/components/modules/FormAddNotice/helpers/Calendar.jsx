// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// export const Calendar = () => {
//   const [value, setValue] = useState(null);

//   const handleChange = newValue => {
//     setValue(newValue);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DesktopDatePicker
//         // // label="Date desktop"
//         // color="red"MuiOutlinedInput-notchedOutline
//         sx={{
//           borderRadius: '40px',
//           '&  .MuiOutlinedInput-notchedOutline': {
//             borderColor: 'transparent',
//           },
//           //   '.MuiAutocomplete-inputRoot': {
//           //     bgcolor: '#FDF7F2',
//           //     borderRadius: '40px',
//           //     border: '1px solid #F5925680',
//           //   },
//           '& MuiInputBase-root MuiOutlinedInput-root': { borderRadius: '40px' },
//           '& .MuiInputBase-input': {
//             borderRadius: '40px',

//             // bgcolor: '#FDF7F2',
//             '&::placeholder': {
//               fontSize: { xs: '13.3px', md: '16px' },
//               color: '#111111',
//               borderRadius: '40px',
//             },
//           },
//         }}
//         inputFormat="DD.MM.YY"
//         value={value}
//         onChange={handleChange}
//         renderInput={params => (
//           <TextField
//             {...params}
//             sx={{
//               '&  .MuiOutlinedInput-notchedOutline': {
//                 border: '1px solid #F5925680',
//                 borderRadius: '40px',
//               },
//               //   '&  .MuiAutocomplete-inputRoot': {
//               //     bgcolor: '#FDF7F2',
//               //     borderRadius: '40px',
//               //     border: '1px solid #F5925680',
//               //   },
//               '& .MuiInputBase-input': {
//                 bgcolor: '#FDF7F2',
//                 borderTopLeftRadius: '40px',
//                 borderBottomLeftRadius: '40px',
//                 padding: { xs: '10px 16px', md: '14px 32px' },
//                 fontSize: { xs: '14px', md: '18px' },
//                 fontFamily: 'Arial',
//                 '&::placeholder': { fontSize: { xs: '14px', md: '18px' }, color: '#111111' },
//                 '& .MuiInputAdornment-positionEnd': {
//                   position: 'absolute',
//                 },
//               },
//             }}
//           />
//         )}
//       />
//     </LocalizationProvider>
//   );
// };
