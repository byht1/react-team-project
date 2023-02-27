import styled from 'styled-components';
import image from '../../img/home/home-back.svg';
import imageDesk from '../../img/home/home_desktop.svg';
import { NavLink } from 'react-router-dom';
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

export const HomeTitle = styled.h2`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  /* position: relative;
  z-index: 9; */

  @media (min-width: 630px) {
    font-size: 48px;
    line-height: 1.47;
  }
  @media (min-width: 768px) {
    margin-bottom: 90px;
  }
  @media (min-width: 1280px) {
    margin-top: 100px;
  }
`;
export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.b};
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  &:not(:last-child) {
    margin-right: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    padding: 10px 28px;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }
  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);
  &:active,
  &:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.a};
    border: 2px solid ${p => p.theme.colors.a};
    color: ${p => p.theme.colors.w};
  }
`;
