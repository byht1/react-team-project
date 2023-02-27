import styled from 'styled-components';
import { Container } from 'components/global/Container';
import { NavLink } from 'react-router-dom';

import bgmob from '../../../img/auth/bgMob.png';
import bgtab from '../../../img/auth/bgTab.png';
import bgdesc from '../../../img/auth/bgDesc.png';

export const BgWrapper = styled.div`
  height: calc(100vh - 74px);
  background-image: url(${bgmob});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 1200px;

  @media (min-width: 768px) {
    height: calc(100vh - 97px);
    min-height: 500px;
    background-image: url(${bgtab});
    background-size: 1500px;
  }

  @media (min-width: 1280px) {
    height: calc(100vh - 96px);
    background-image: url(${bgdesc});
  }
`;

export const AuthContainer = styled(Container)`
  padding-top: 42px;

  @media (min-width: 768px) {
    padding-top: 0;
    position: relative;
    height: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    background-color: ${p => p.theme.colors.w};
    width: 608px;
    padding: 60px 80px 40px 80px;
    border-radius: ${p => p.theme.radii.inputRadius};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
  @media (min-width: 1280px) {
    width: 618px;
    padding: 60px 80px;
  }
`;

export const ForgotPassFormTitle = styled.h2`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.b};
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxml};
  } ;
`;

export const Link = styled(NavLink)`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.l};
  margin-top: 40px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    max-width: 458px;
  }
`;

export const SuccessMessage = styled.p`
  text-align: center;

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.a};
`;
