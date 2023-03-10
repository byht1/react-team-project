import styled from 'styled-components';
import image from '../../img/home/home-back.svg';
import imageDesk from '../../img/home/home_desktop.svg';
export const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 20px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 620px;
  background-position: 25% 150px;
  position: fixed;
  @media (min-width: 630px) {
    background-size: 1449px;
  }
  @media (min-width: 1280px) {
    background-size: 1380px;
    background-image: url(${imageDesk});
    background-position: 50% 100%;
    padding: 0 0 60px 0;
    overflow-y: auto;
  }
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
    justify-content: start;
    align-items: center;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    align-content: space-between;
    flex-direction: row;
    height: 100%;
  }
`;
export const MobileImage = styled.img`
  width: 300px;
  position: absolute;
  bottom: 74px;
  @media (min-width: 629.9px) {
    display: none;
  }
`;
export const TabletImage = styled.img`
  @media (max-width: 629.9px) {
    display: none;
  }
  width: 645px;
  position: absolute;
  bottom: 74px;
  @media (min-width: 630px) {
    width: 450px;
  }
  @media (min-width: 1279.9px) {
    display: none;
  }
`;
export const DesktopImage = styled.img`
  @media (max-width: 1279.9px) {
    display: none;
  }
  display: block;
  width: 590px;
  margin-left: auto;
  margin-top: auto;
`;
export const HomeTitle = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  width: 280px;
  position: relative;
  z-index: 9;

  @media (min-width: 630px) {
    width: 414px;
    font-size: 49px;
    line-height: 1.47;
    background-color: #fdf7f263;
  }
  @media (min-width: 768px) {
    width: 588px;
    font-size: 68px;
  }
  @media (min-width: 1280px) {
    margin-right: auto;
    margin-bottom: auto;
    margin-top: 60px;
  }
`;
