import styled from 'styled-components';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
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
