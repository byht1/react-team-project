import styled from 'styled-components';
export const CardBox = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  color: ${p => p.theme.colors.b};
  margin-bottom: 28px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px 0;
`;
