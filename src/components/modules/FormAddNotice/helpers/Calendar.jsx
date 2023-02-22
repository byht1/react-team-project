// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// export const MaterialUIPickers = () => {
//   const [value, setValue] = React.useState('');
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleChange = newValue => {
//     setValue(newValue);
//     setIsOpen(!isOpen);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs} placeholder={' '}>
//       <Stack spacing={3} placeholder={' '}>
//         <DesktopDatePicker
//           inputFormat="MM/DD/YYYY"
//           value={value}
//           onClose={() => setIsOpen(false)}
//           onOpen={() => setIsOpen(!isOpen)}
//           open={isOpen}
//           onChange={handleChange}
//           renderInput={params => (
//             <TextField
//               {...params}
//               placeholder=""
//               onFocus={() => {
//                 setIsOpen(!isOpen);
//               }}
//               onBlur={() => {
//                 setIsOpen(!isOpen);
//               }}
//               sx={{ '& .MuiIconButton-root': { display: 'none' } }}
//             />
//           )}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// };
