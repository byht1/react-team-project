import styled from 'styled-components';
import { Container } from 'components/global/Container';

export const NoticesContainer = styled(Container)`
  padding-top: 42px;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-top: 90px;
  }

  @media (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;
