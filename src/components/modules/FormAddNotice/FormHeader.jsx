import { MainText, TextTittle, HeaderWrap } from './FormAddNotice.styled';
import { useLocation } from 'react-router-dom';

export const FormHeader = () => {
  const location = useLocation();

  return (
    <HeaderWrap>
      <TextTittle>Add pet</TextTittle>
      {location.pathname === '/addpet/step1' && (
        <MainText>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
        </MainText>
      )}
    </HeaderWrap>
  );
};
