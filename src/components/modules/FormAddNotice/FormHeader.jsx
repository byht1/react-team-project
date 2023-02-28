import { MainText, TextTittle, HeaderWrap } from './FormAddNotice.styled';
import { useLocation } from 'react-router-dom';

export const FormHeader = () => {
  const location = useLocation().pathname.split('/').pop();

  return (
    <HeaderWrap>
      <TextTittle>Add pet</TextTittle>
      {location === 'addpet' && (
        <MainText>Choose a category and add information about your pet</MainText>
      )}
    </HeaderWrap>
  );
};
