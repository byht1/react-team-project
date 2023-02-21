// import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

// import { MaterialUIPickers } from '../DatePicker';

import {
  Buttons,
  InputWrap,
  LabelInput,
  Input,
  LastInput,
  ErrorInput,
  ButtonDark,
  ButtonLight,
} from './FormPages.styled';

export const FirstPage = ({ nextStep, onClose }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  // console.log(register);
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <InputWrap>
        <LabelInput htmlFor="petName">
          Name pet
          <Input {...register('petName')} id="petName" type="text" placeholder="Type name pet" />
          {errors.petName && <ErrorInput>{errors.petName.message}</ErrorInput>}
        </LabelInput>

        <LabelInput htmlFor="petBirth">
          Date of birth
          <Input
            {...register('petBirth')}
            id="petBirth"
            type="text"
            placeholder="Type date of birth"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
          />
          {/* <MaterialUIPickers /> */}
          {/* <DatePicker
            {...register('petBirth')}
            showIcon
            placeholderText="Type date of birth"
            // clearIcon={null}
            // calendarIcon={<ImgClose src={celendar} alt="" />}
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            onChange={value => {
              setStartDate(value);
            }}
            // maxDate={new Date()}
            // minDate={'01-01-1990'}
            // yearPlaceholder={'years'}
            // monthPlaceholder={'months'}
            // dayPlaceholder={'days'}
            id="petBirth"
            name="petBirth"
            // value={petBirth}
          /> */}
          {errors.petBirth && <ErrorInput>{errors.petBirth.message}</ErrorInput>}
        </LabelInput>

        <LabelInput htmlFor="petBreed">
          Breed
          <LastInput {...register('petBreed')} id="petBreed" type="text" placeholder="Type breed" />
          {errors.petBreed && <ErrorInput>{errors.petBreed.message}</ErrorInput>}
        </LabelInput>
      </InputWrap>

      <Buttons>
        <ButtonDark
          onClick={async () => {
            const result = await trigger(['petName', 'petBirth', 'petBreed']);
            console.log(result);
            if (result) {
              nextStep();
            }
          }}
        >
          Next
        </ButtonDark>
        <ButtonLight onClick={onClose}>Cancel</ButtonLight>
        {/* <Button theme="dark" fn={nextStep}> */}
      </Buttons>
      {/* <CloseBtn type="button" onClick={onClose}>
        <GrCloseIcon />
      </CloseBtn> */}
    </>
  );
};
