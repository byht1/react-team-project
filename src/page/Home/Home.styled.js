import styled from 'styled-components';
import image from '../../img/home-back.svg';
export const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 20px;
  background-image: url(${image});
  /* MaxBox background-image: url(/react-team-project/static/media/home-back.8a6d1d80765a0ee620beb0bdd1608a3c.svg); */
  background-repeat: no-repeat;
  background-size: 620px;
  background-position: 25% 65px;
  position: fixed;
`;
export const MaxBox = styled.div``;
export const Box = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 480px) and (max-width: 767.9px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
export const Image = styled.img`
  width: 300px;
  position: absolute;
  bottom: 74px;
`;
export const HomeTitle = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  width: 280px;
`;
