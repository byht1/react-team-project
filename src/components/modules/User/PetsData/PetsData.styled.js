import styled from 'styled-components';
import { theme } from 'theme/theme';
import { ReactComponent as plus } from '../../../../img/User/plus.svg';
import { ReactComponent as trashBin } from '../../../../img/User/trashBin.svg';

export const TitleBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;
  margin-top: 46px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding-right: 16px;
    max-width: 821px;
    width: 704px;
  }
  @media (min-width: 1280px) {
    width: 100%;
    margin: 40px 0 15px 0;
    margin-left: auto;
  }
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

  color: ${theme.colors.b};

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 38px;
  }
`;
export const TitleSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;

  color: ${theme.colors.b};

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
  }
  @media (min-width: 1280px) {
  }
`;
export const PetBlcok = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 80px;
`;
export const PetCard = styled.div`
  max-width: 280px;
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

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: none;
    width: 704px;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    width: 821px;
  }
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-left: 32px;
    margin-bottom: 0px;
  }
  @media (min-width: 1280px) {
  }
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
  @media (min-width: 768px) {
    width: 161px;
    height: 161px;
    margin-bottom: 0px;
  }
  @media (min-width: 1280px) {
  }
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

  color: ${theme.colors.b};

  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) {
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: rgba(17, 17, 17, 0.6);
  margin-top: 276px;
  margin-left: 225px;
  top: 0;
  bottom: 0;
  width: 16.5px;
  height: 18.5px;
  background-color: none;
  cursor: pointer;
  border-radius: 50%;

  @media (min-width: 768px) {
    background-color: ${theme.colors.bg};
    margin-top: 20px;
    margin-left: 618px;
    width: 44px;
    height: 44px;
  }
  @media (min-width: 1280px) {
    margin-top: 20px;
    margin-left: 738px;
  }
`;

export const PhotoBlock = styled.div``;

export const AddPetBlock = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding-right: 16px;
  }
  @media (min-width: 1280px) {
  }
`;

export const AddPetIc = styled(plus)`
  margin-left: 15px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-color: ${theme.colors.a};
  border-radius: 50%;
  & path {
    stroke: ${theme.colors.w};
  }
`;

export const TrashBinIc = styled(trashBin)`
  cursor: pointer;
  height: 16px;
  width: 18px;

  & path {
    stroke: ${theme.colors.w};
  }

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
    padding: 7.5px;
    border-radius: 50%;
  }
  @media (min-width: 1280px) {
  }

  &:hover path {
    fill: ${theme.colors.a};
  }
`;

export const PandaImg = styled.img`
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  position: relative;
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: fit-content;
  }
  @media (min-width: 1280px) {
    width: 821px;
    height: 462px;
    margin-left: auto;
  }
`;

export const PandaText = styled.span`
  position: absolute;
  margin-top: 155px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  @media (min-width: 768px) {
    margin-top: 360px;
    margin-left: 0px;
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: 1280px) {
    margin-top: 430px;
    margin-left: 440px;
  }
`;
