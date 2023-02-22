import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;

    align-items: baseline;
  }
`;
