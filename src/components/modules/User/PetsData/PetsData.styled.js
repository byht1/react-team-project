import styled from 'styled-components';
import { theme } from 'theme/theme';

export const TitleBlock = styled.div`
  margin-top: 46px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #000000;
`;
export const TitleSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  color: #111111;
`;
export const PetBlcok = styled.div`
  border-radius: 20px;
  margin-bottom: 80px;
`;
export const PetCard = styled.div`
  position: relative;
  background-color: ${theme.colors.wt};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 16px 20px 20px 20px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const ListItem = styled.li`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
export const Img = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ListItemInfo = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #000000;
`;

export const Icon = styled.div`
  position: absolute;
  margin-top: 290px;
  margin-left: 227.5px;
  top: 0;
  bottom: 0;
  width: 12.5px;
  height: 12.5px;
  background-color: salmon;
`;
