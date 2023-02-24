import styled from 'styled-components';

export const CardBox = styled.li`
  background-color: ${p => p.theme.colors.w};
  padding: 12px 5px 12px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  @media screen and (max-width: 767.9px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 16px 5px 16px 5px;
  }
  @media screen and (min-width: 1280px) {
    width: 394px;
  }
`;
export const CardTitle = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  text-decoration: underline;
  color: ${p => p.theme.colors.a};
  margin-bottom: 12px;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.4;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const FriendLogo = styled.img`
  width: 110px;
  height: 78px;

  margin-bottom: auto;
  margin-right: 12px;
  @media screen and (max-width: 767.9px) {
    margin-top: auto;
  }
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 85px;
  }
  @media screen and (min-width: 1280px) {
    width: 158px;
    height: 112px;
  }
`;
export const InfoList = styled.div`
  position: relative;
  width: 100%;
`;
export const InfoItem = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  max-width: 148px;
  color: ${p => p.theme.colors.b};
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.4;
  }
  & a {
    color: ${p => p.theme.colors.b};
    &:hover,
    &:focus {
      text-decoration: underline;
      color: ${p => p.theme.colors.a};
    }
  }
  & span {
    display: block;
  }

  &:not(:last-child) {
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
      margin-bottom: 8px;
    }
    @media screen and (min-width: 1280px) {
      margin-bottom: 12px;
    }
  }
`;

export const InfoTimeItem = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  background-color: ${p => p.theme.colors.trsp};
  color: ${p => p.theme.colors.b};
  text-align: left;

  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.4;
  }
  & span {
    display: block;
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.a};
  }
`;
export const Backdrop = styled.div`
  position: absolute;
  z-index: 1;
  background-color: white;
  display: flex;
  padding: 12px;
  background-color: ${p => p.theme.colors.w};
  border: 1px solid ${p => p.theme.colors.a};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
export const DayList = styled.ul`
  margin-right: 13px;
`;
export const DayItem = styled.li`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.b};
  margin-bottom: 5px;
`;

export const TimeList = styled.ul``;
export const TimeItem = styled.li`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.b};
  margin-bottom: 5px;
`;

export const NoTimeDayList = styled.ul``;
export const NoTimeLi = styled.li`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.b};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const NoDayItem = styled.span`
  margin-right: 13px;
`;
export const NoTimeItem = styled.span`
  text-align: right;
`;
