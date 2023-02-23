import styled from 'styled-components';
import { ThreeCircles } from 'react-loader-spinner';

export const NewLoader = styled(ThreeCircles)`
  position: relative;
  top: 50%;
  left: 50%;
  height: 100px;
  width: 100px;
  margin-top: -50px;
  margin-left: -50px;
  color: red;
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${p => `rgba(253, 247, 242, ${p.opacity.opacity})`};
`;
