import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField, Stack, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useForm, Controller } from 'react-hook-form';
// import type { DefaultValues, SubmitHandler } from 'react-hook-form';
import { isFuture } from 'date-fns';

const defaultValues = {
  date: new Date(),
};

const onSubmit = data => console.info(data);

export const DataPicker = () => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });
  return (
    <>
      <Controller
        control={control}
        name="date"
        rules={{
          validate: {
            min: date => isFuture(date) || 'Please, enter a future date',
          },
        }}
        render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
          <DatePicker
            {...field}
            inputRef={ref}
            label="Date"
            renderInput={inputProps => (
              <TextField
                {...inputProps}
                onBlur={onBlur}
                name={name}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        )}
      />
      {/* <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button> */}
    </>
  );
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ec5990',
    },
    secondary: {
      main: '#516391',
    },
    background: {
      default: '#081229',
    },
  },
});

// export default function App() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Form />
//       </ThemeProvider>
//     </LocalizationProvider>
//   );
// }
