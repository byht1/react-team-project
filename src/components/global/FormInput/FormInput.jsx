import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, Label, ErrorMsg, IconBox } from './FormInput.styled';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const FormInput = ({ name, type, placeholder = '', mb, showhide = false }) => {
  const [inputType, setInputType] = useState(type);
  const [passShown, setPassShown] = useState(false);

  const togglePassShown = () => {
    setPassShown(!passShown);
    setInputType(passShown ? type : 'text');
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Label mb={mb}>
      <Input {...register(name)} type={inputType} placeholder={placeholder} />
      {showhide && (
        <IconBox onClick={togglePassShown}>
          {passShown ? <AiFillEyeInvisible color="grey" /> : <AiFillEye color="grey" />}
        </IconBox>
      )}

      {errors[name] && <ErrorMsg>{errors[name]?.message}</ErrorMsg>}
    </Label>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mb: PropTypes.number,
  showhide: PropTypes.bool,
};
