import styled from 'styled-components';

export const FormWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-50%, -50%) scale(1);
  transform-origin: top left;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  width: 93.7vw;
  height: 76.5vh;
  overflow-y: auto;
  padding: 40px 20px;
  @media (min-width: 768px) {
    width: 608px;
    min-height: 885;
    padding: 40px 80px;
  }
  /* @media (min-width: 1280px) {
    padding: 10px 12px 10px 20px;
    border-radius: 20px;
  } */
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const MainText = styled.p`
  font-size: 16px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
