import styled from 'styled-components';
import { theme } from '../../../../theme/theme';
import { ReactComponent as camera } from '../../../../img/User/camera.svg';

export const Title = styled.h2`
  margin-bottom: 18px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  @media (min-width: 768px) {
    width: 736px;
    margin-top: 80px;
    margin-left: 32px;
  }
  @media (min-width: 1280px) {
    margin-left: 16px;
    margin-top: 40px;
    font-size: 28px;
    line-height: 38px;
  }
`;

export const ProfileImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 233px;
  height: 233px;
  border-radius: ${theme.radii.round};
  object-fit: cover;
`;

export const Div = styled.div`
  padding: 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.wt};
  border-radius: ${theme.radii.normal};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    padding: 24px 40px 24px 32px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    position: relative;
    flex-direction: column;
    padding: 20px 16px 18px 16px;
  }
`;

export const SpanEditPhoto = styled.label`
  width: fit-content;
  margin-right: 0px;
  margin-left: auto;
  color: ${theme.colors.bt};
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  margin-top: 13px;
  position: relative;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 231px;
    margin-right: 16px;
  }
  cursor: pointer;
`;

export const Container = styled.div`
  margin: 0px 20px;
  max-width: 380px;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    max-width: 736px;
    margin: 0px 32px 40px 0px;
  }
  @media (min-width: 1280px) {
    position: fixed;
    max-width: 411px;
  }
`;

export const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    max-width: fit-content;
  }
`;

export const CameraIc = styled(camera)`
  cursor: pointer;
  height: 22px;
  width: 22px;
  margin-right: 5px;
  & path {
    stroke: ${theme.colors.w};
  }
`;

export const LoadFile = styled.input`
  z-index: -155;
  width: 100%;
  top: 0px;
  left: 0px;
  position: absolute;

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;
