
import { Container } from 'components/global/Container';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../../img/authBg.png';

export const BgWrapper = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-position: right -950px bottom -20px;
  background-repeat: no-repeat;
  background-size: 1800px;

  @media (min-width: 768px) {
    min-height: 600px;
    background-size: 1280px;
    background-position: bottom;
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

export const RegisterFormTitle = styled.h2`
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

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    top: 42%;
    transform: translate(-50%, -50%);
    background-color: ${p => p.theme.colors.w};
    width: 608px;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 80px 40px 80px;
    border-radius: ${p => p.theme.radii.inputRadius};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
  @media (min-width: 1280px) {
    width: 618px;
    padding: 60px 80px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    max-width: 458px;
  }
`;

export const Input = styled.input`
  height: 40px;
  padding: 11px 14px;
  background-color: ${p => p.theme.colors.bg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.inputRadius};
  margin-bottom: ${p => p.mb}px;
`;

export const RegisterText = styled.p`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.g};
  margin-right: 5px;
`;

export const Link = styled(NavLink)`
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.l};
`;
