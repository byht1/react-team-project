import React from 'react';
import { LightBtn, DarkBtn } from './Button.styled';
import { propTypeButton } from './type';

export const Button = ({ children, theme, type = 'button', fn, ...props }) => {
  return (
    <>
      {theme === 'dark' ? (
        <DarkBtn onClick={fn} type={type} {...props}>
          {children}
        </DarkBtn>
      ) : (
        <LightBtn onClick={fn} type={type} {...props}>
          {children}
        </LightBtn>
      )}
    </>
  );
};

Button.propTypes = propTypeButton;
