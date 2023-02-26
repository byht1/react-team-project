import styled from 'styled-components';
import { Autocomplete } from '@mui/material';

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[11]}px;
`;

export const LabelInput = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[8]}px;
    }
  }
`;

export const LabelInputDate = styled.label`
  position: relative;
  font-size: 18px;
  & .MuiInputBase-input:focus .MuiOutlinedInput-notchedOutline {
    border: 4px solid red;
  }
  & .MuiFormControl-root {
    width: 100%;
    margin-top: 12px;
    height: 49.55px;
  }

  & .css-1ozfgvy-MuiFormControl-root-MuiTextField-root .MuiOutlinedInput-root {
    border-radius: 40px;
  }

  & .MuiInputBase-root {
    height: 49.55px;
  }

  & .MuiOutlinedInput-notchedOutline {
    font-size: 14px;

    border: 1px solid #f5925680;
    border-radius: 40px;
    background-color: #fdf7f2;
    z-index: -1;
  }
  & .MuiInputBase-input {
    font-size: 14px;
    padding: 11px 14px;
    @media (min-width: 768px) {
      padding: 11px 16px;
      font-size: 16px;
    }
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }

  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const LabelName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.45;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: ${p => p.theme.lineHeights.min};
  }
`;

export const Input = styled.input`
  padding: 11px 14px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  border-radius: ${p => p.theme.radii.inputRadius};
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  outline: none;
  transition: var(--transition-border-color);

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.a};
  }

  &::placeholder {
    color: ${p => p.theme.colors.phc};
    font-size: ${p => p.theme.fontSizes.s};
    font-family: ${p => p.theme.fonts.manrope};

    @media (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.s};
    }
  }

  @media (min-width: 768px) {
    padding: 11px 16px 10px;
    margin-top: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m};
    font-size: 16px;
    line-height: 1.66;
  }
`;

export const InputSelect = styled(Autocomplete)`
  &.css-zrexw9-MuiAutocomplete-root .MuiAutocomplete-inputRoot {
    &:hover {
      border: transparent;
    }
  }

  & input {
    &::placeholder {
      color: ${p => p.theme.colors.phc};
      font-size: ${p => p.theme.fontSizes.s};
      font-family: ${p => p.theme.fonts.manrope};
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

export const ButtonDark = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 28px;
  outline: none;
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  width: 100%;
  height: 40px;
  background-color: ${p => p.theme.colors.a};
  color: ${p => p.theme.colors.wt};
  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.w};
    color: ${p => p.theme.colors.bt};
  }

  @media (min-width: 768px) {
    width: 180px;
    height: 44px;
  }
`;

export const ButtonLight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 28px;
  outline: none;
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  width: 100%;
  height: 40px;
  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.bt};
  transition: var(--transition-bg), var(--transition-color);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.a};
    color: ${p => p.theme.colors.wt};
  }

  @media (min-width: 768px) {
    width: 180px;
    height: 44px;
  }
`;

export const ErrorInput = styled.div`
  position: absolute;
  color: red;
  font-size: 10px;
  top: 80px;

  @media (min-width: 768px) {
    top: 90px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const ErrorInputDate = styled.div`
  position: absolute;
  color: red;
  font-size: 10px;
  top: 80px;

  @media (min-width: 768px) {
    top: 90px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

//TextArea styled (2nd page)

export const Subtitle = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.bt};
  margin-bottom: ${p => p.theme.space[6]}px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 14px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  border-radius: ${p => p.theme.radii.normal};
  margin-top: ${p => p.theme.space[3]}px;
  resize: none;
  height: 100px;
  outline: none;
  transition: var(--transition-border-color);

  @media (min-width: 768px) {
    padding: 11px 16px 10px;
    margin-top: ${p => p.theme.space[4]}px;
    height: 116px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.big};
  }

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.a};
  }

  &::placeholder {
    color: ${p => p.theme.colors.phc};
    font-size: ${p => p.theme.fontSizes.s};
    font-family: ${p => p.theme.fonts.manrope};

    @media (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.s};
    }
  }
`;

export const ErrorTextarea = styled.div`
  position: absolute;
  font-size: 10px;
  top: 140px;
  color: red;

  @media (min-width: 768px) {
    top: 156px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

// FileInput styled (2nd page)

export const LabelFile = styled.label`
  position: relative;
  cursor: pointer;
  width: 208px;
  height: 208px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid ${p => p.theme.colors.inputBdr};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.buttonBg};
  }

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: ${p => p.theme.radii.inputRadius};
    margin-bottom: ${p => p.theme.space[11]}px;
  }
`;

export const InputFileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 208px;
  height: 208px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.radii.normal};

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: ${p => p.theme.radii.inputRadius};
  }
`;

export const PreviewPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const InputFile = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const ErrorInputFile = styled.div`
  z-index: 10;
  position: absolute;
  color: red;
  font-size: 10px;
  top: 210px;
  left: 10px;

  @media (min-width: 768px) {
    top: 190px;
    left: -106px;
    width: 394px;
    text-align: center;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
