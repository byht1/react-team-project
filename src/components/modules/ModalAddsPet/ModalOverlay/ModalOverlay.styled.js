import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${p => p.theme.size.maxVW};
  height: ${p => p.theme.size.maxVH};
  background-color: ${p => p.theme.colors.overlay};
  overflow-y: scroll;
  z-index: 1200;
`;

export { Overlay };
