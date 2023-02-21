import styled from 'styled-components';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { IconButton } from '@mui/material';
import { TextareaAutosize } from '@mui/base';

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
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
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
  /* & .jjTjuI {
    width: 60px;
    height: 60px;
  } */

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
  color: ${props => (props.male ? '#F59256' : '#000000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 45px;
  @media (min-width: 768px) {
    margin-right: 65px;
  }
`;

export const LabelFemale = styled.label`
  color: ${props => (props.female ? '#F59256' : '#000000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputFile = styled(IconButton)`
  width: 140px;
  height: 140px;
  & span {
    background-color: #fdf7f2;
    border-radius: 20px;
  }
  & svg {
    z-index: 2;
    width: 62px;
    height: 62px;
    color: #6f6d6b;
  }
`;

export const ImgLoaded = styled.img`
  position: absolute;
  z-index: 4;
  width: 140px;
  max-height: 140px;
  border-radius: 20px;
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
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 10px 28px;
  background-color: ${props => (props.checked ? '#F59256' : '#FFF')};
  color: ${props => (props.checked ? '#FFF' : '#000')};
`;

export const RadioWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    margin-top: 28px;
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
  @media (min-width: 768px) {
    font-size: 24px;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
    @media (min-width: 768px) {
      margin-bottom: 28px;
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
  margin-left: -10px;
  margin-bottom: 32px;
  margin-top: -5px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
    margin-top: -10px;
  }
`;

export const Sex = styled.p`
  font-size: 18;
  font-weight: 500;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 18px;
  }
`;

export const Comments = styled(TextareaAutosize)`
  display: flex;
  background-color: #fdf7f2;
  padding: 16px 18px;
  resize: none;
  width: 100%;
  border: 1px solid #f59256;
  border-radius: 40px;
  height: 43px;
  font-family: 'Manrope';
  @media (min-width: 768px) {
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
