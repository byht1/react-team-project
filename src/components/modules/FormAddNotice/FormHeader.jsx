import { MainText, TextTittle, HeaderWrap } from './FormAddNotice.styled';
import { useLocation } from 'react-router-dom';

export const FormHeader = () => {
  const location = useLocation().pathname.split('/').pop();
  console.log('🚀  location:', location);

  return (
    <HeaderWrap>
      <TextTittle>Add pet</TextTittle>
      {location === 'addpet' && (
        <MainText>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
        </MainText>
      )}
    </HeaderWrap>
  );
};
