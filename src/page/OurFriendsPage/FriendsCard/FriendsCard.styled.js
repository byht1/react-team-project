import styled from 'styled-components';

// export const colors = Object.freeze({
//   a: 'var(--accent)',
//   bg: 'var(--background)',
//   g: 'var(--grey)',
//   l: 'var(--link)',
//   buttonBg: 'var(--button-bg)',
//   da: 'var(--dark-accent)',
//   w: 'var(--white)',
//   b: 'var(--black)',
//   gradient: 'var(--gradient)',
//   overlay: 'var(--overlay)',
//   wt: 'var(--white-text)',
//   bt: 'var(--black-text)',
//   trsp: 'var(--transparent-color)',
//   tagBg: 'var(--tag-bg)',
//   sf: 'var(--search-text)',
// });
// html {
//   --accent: #f59256;
//   --background: #fdf7f2;
//   --grey: rgba(17, 17, 17, 0.6);
//   --link: #3091eb;
//   --button-bg: #f59256;
//   --dark-accent: #ff6101;
//   --transparent-color: transparent;
//   --tag-bg: rgba(255, 255, 255, 0.6);

//   --white: #ffffff;
//   --black: #111111;

//   --shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
//   --gradient: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
//   --overlay: rgba(17, 17, 17, 0.6);

//   --black-text: #111111;
//   --white-text: #ffffff;
//   --search-text: #535353;

//   --transition-bg: background-color 250ms linear;
//   --transition-color: color 250ms linear;
//   --transition-border-color: border-color 250ms linear;
//   --transition-transform: transform 500ms linear cubic-bezier(0.4, 0, 0.2, 1);
// }
export const CardBox = styled.li`
  background-color: ${p => p.theme.colors.w};
  padding: 12px 5px 12px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 12px;
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
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const FriendLogo = styled.img`
  width: 110px;
  height: 78px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 12px;
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
  line-height: 16px;
  max-width: 148px;
  color: ${p => p.theme.colors.b};
  & a {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

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
  }
`;
export const Backdrop = styled.div`
  position: absolute;
  /* height: 100px;
  width: 100px; */
  z-index: 1;
  background-color: white;
  display: flex;
  padding: 12px;
  background-color: ${p => p.theme.colors.w};
  border: 1px solid ${p => p.theme.colors.a};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
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
  & span {
    display: block;
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.a};
  }
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
`;

export const TimeList = styled.ul``;
export const TimeItem = styled.li`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.b};
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
`;
export const NoDayItem = styled.span`
  margin-right: 13px;
`;
export const NoTimeItem = styled.span`
  text-align: right;
`;
