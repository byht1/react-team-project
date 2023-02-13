import styled from 'styled-components';

export const ContainerBox = styled.div`
  ${p => p.pt && `padding-top: ${p.pt}px`};
  ${p => p.pb && `padding-bottom: ${p.pb}px`};
  padding-left: 20px;
  padding-right: 20px;

  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 704px;
  }
  @media (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1248px;
  }
`;
