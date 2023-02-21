import styled from 'styled-components';
import { Box } from 'components/global/Box';

export const Backdrop = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 997; */

  width: ${p => p.theme.size.maxVW};
  height: ${p => p.theme.size.maxVH};

  background-color: ${p => p.theme.colors.overlay};
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding-top: 94px;
    padding-bottom: 94px;
    padding-left: 20px;
    padding-right: 20px;
    overflow-y: scroll;
  }
`;

export const Modal = styled(Box)`
  position: relative;

  padding-left: 20px;
  padding-right: 20px;

  background-color: ${p => p.theme.colors.w};

  border-radius: ${p => p.theme.radii.normal};

  @media (max-width: 767px) {
    max-width: 416px;

    margin-left: auto;
    margin-right: auto;
    padding-top: 60px;
    padding-bottom: 40px;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;

    min-width: 704px;

    padding-top: 32px;
    padding-bottom: 32px;

    transform: translate(-50%, -50%);
    border-radius: ${p => p.theme.radii.inputRadius};
  }
`;

export const CloseModalBtn = styled('button')`
  position: absolute;
  top: 20px;
  right: 20px;
  /* z-index: 998; */

  display: flex;

  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  background-color: ${p => p.theme.colors.bg};
  backdrop-filter: blur(2px);

  border-radius: ${p => p.theme.radii.round};

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
