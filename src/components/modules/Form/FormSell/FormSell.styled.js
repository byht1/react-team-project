import styled from 'styled-components';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { IconButton } from '@mui/material';

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  background-color: #fff;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  margin-bottom: 28px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
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
  color: #23c2ef;
  filter: drop-shadow(1px 1px 1px #4778e9);
`;

export const RadioFemale = styled(FemaleIcon)`
  color: #ff8787;
  filter: drop-shadow(1px 1px 1px #b71c1c);
`;

export const LabelMale = styled.label`
   color: ${props => (props.male ? '#F59256' : '#000000')}; */
  /* & + input:checked {
    color: #23c2ef; */
`;

export const LabelFemale = styled.label`
  color: ${props => (props.female ? '#F59256' : '#000000')};
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
  /* border: 2px solid #f59256;
  border-radius: 40px;
  padding: 10px 28px; */
`;

export const Label = styled.label`
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 10px 28px;
  background-color: ${props => (props.checked ? '#F59256' : '#FFF')};
`;
