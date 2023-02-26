import styled from 'styled-components';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { IconButton } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import { Input } from 'components/global/FormInput/FormInput.styled';

export const InputAdd = styled(Input)`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 11px 16px;
  }
`;

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  background-color: #fff;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const ButtonWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const TextTittle = styled.p`
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const RadioTwo = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  & + svg {
    cursor: pointer;
  }
`;

export const RadioMale = styled(MaleIcon)`
  width: 60px;
  height: 60px;
  color: #23c2ef;

  filter: drop-shadow(1px 1px 1px #4778e9);
`;

export const RadioFemale = styled(FemaleIcon)`
  color: #ff8787;
  width: 60px;
  height: 60px;
  filter: drop-shadow(1px 1px 1px #b71c1c);
`;

export const LabelMale = styled.label`
  color: ${props => (props.male ? ' var(--accent)' : '#000000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 45px;
  & .MuiSvgIcon-root {
    width: 54px;
    height: 54px;
    @media (min-width: 768px) {
      width: 86px;
      height: 85px;
      padding-left: 6px;
    }
  }
`;

export const LabelFemale = styled.label`
  color: ${props => (props.female ? 'var(--accent)' : '#000000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .MuiSvgIcon-root {
    width: 56px;
    height: 56px;
    @media (min-width: 768px) {
      width: 86px;
      height: 85px;
    }
  }
`;

export const InputFileIcon = styled(IconButton)`
  width: 116px;
  height: 116px;
  & span {
    background-color: ${p => p.theme.colors.bg};
    border-radius: 20px;
  }
  & svg {
    z-index: 2;
    width: 47px;
    height: 47px;
    color: #6f6d6b;
  }
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
    & svg {
      width: 62px;
      height: 62px;
    }
  }
`;

export const LabelText = styled.p`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  border: 2px solid var(--accent);
  border-radius: 40px;
  padding: 8px 28px;
  background-color: ${props => (props.checked ? 'var(--accent)' : '#FFF')};
  color: ${props => (props.checked ? '#FFF' : '#000')};
`;

export const RadioWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

export const LabelInput = styled.label`
  font-size: 18px;
  & .MuiInputBase-input:focus .MuiOutlinedInput-notchedOutline {
    border: 4px solid red;
  }
  & .MuiFormControl-root {
    width: 100%;
  }

  & .MuiInputBase-root.Muifocused {
    /* border: 4px solid #f5925680;
    outline: 4px solid #f5925680; */
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
  &:not(:last-child) {
    margin-bottom: 16px;
    @media (min-width: 768px) {
      margin-bottom: 28px;
      margin-bottom: 18px;
    }
  }
`;

export const LabelSex = styled.p`
  font-size: 18px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 28px;
  }
`;

export const LabelWrap = styled.div`
  display: flex;
  margin-left: -5px;
  margin-bottom: 32px;
  margin-top: -5px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: -20px;
    margin-bottom: 40px;
    margin-top: -10px;
    margin-bottom: 28px;
  }
`;

export const Sex = styled.p`
  font-size: 18;
  font-weight: 500;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 13px;
  }
`;

export const Comments = styled(TextareaAutosize)`
  display: flex;
  background-color: #fdf7f2;
  padding: 11px 14px;
  resize: none;
  width: 100%;
  border: 1px solid var(--accent);
  border-radius: 40px;
  height: 41px;
  font-family: 'Manrope';
  font-size: 14px;
  display: flex;
  @media (min-width: 768px) {
    padding: 16px 18px;
    min-height: 113px;
    font-size: 16px;
    border-radius: 20px;
  }
`;

export const ButtonAhead = styled.button`
  display: 'block';
  width: 100%;
  padding: 10px 28px;
  outline: none;
  margin-bottom: 12px;
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};

  font-weight: ${p => p.theme.fontWeights.average};

  font-size: 16px;
  background-color: ${p => p.theme.colors.a};
  color: ${p => p.theme.colors.wt};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.w};
    color: ${p => p.theme.colors.bt};
  }

  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);
  @media (min-width: 768px) {
    width: 180px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const ButtonBack = styled.button`
  display: 'block';
  width: 100%;
  padding: 10px 28px;
  outline: none;

  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.heading};

  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);
  padding: 8px 28px;
  line-height: ${p => p.theme.lineHeights.heading};

  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.b};
  border: 2px solid ${p => p.theme.colors.a};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.a};
    border: 2px solid ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    width: 180px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Accent = styled.span`
  color: var(--accent);
`;

export const Error = styled.p`
  color: var(--dark-accent);
  margin-top: 6px;

  font-size: 12px;
  font-weight: 400;
  position: absolute;
`;

export const FormWrap = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-50%, -50%) scale(1);
  transform-origin: top left;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  width: 87vw;
  height: 76.5vh;
  overflow-y: auto;
  padding: 40px 20px;
  @media (min-width: 768px) {
    width: 608px;
    min-height: 885;
    padding: 40px 80px;
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 100;
`;

export const MainText = styled.p`
  font-size: 16px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const HeaderWrap = styled.div`
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const ErrorSex = styled.p`
  color: var(--dark-accent);
  margin-top: 125px;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  @media (min-width: 768px) {
    margin-top: 175px;
  }
  @media (min-width: 1280px) {
    margin-top: 176px;
  }
`;

export const WrapInputs = styled.div`
  position: absolute;
  display: flex;
  width: 368px;
  height: 116px;
  left: 140;
  gap: 10px;
  z-index: 5;
  @media (min-width: 768px) {
    width: 540px;
    height: 140px;
  }
`;
export const ImgLoaded = styled.img`
  /* position: absolute;
  z-index: 4; */
  width: 116px;
  height: 116px;
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const AdditionalImg = styled.div`
  width: 116px;
  height: 116px;
  background-color: ${p => p.theme.colors.bg};
  border-radius: 20px;
  padding: 35px;
  & svg {
    z-index: 2;
    width: 47px;
    height: 47px;
    color: #6f6d6b;
  }
  @media (min-width: 768px) {
    padding: 39px;
    width: 140px;
    height: 140px;
    & svg {
      width: 62px;
      height: 62px;
    }
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const WrapAddedImg = styled.div`
  border-radius: 20px;
  overflow: hidden;
`;
