import styled from 'styled-components';
import { Container } from 'components/global/Container';

export const BlogContainer = styled(Container)`
  padding-top: ${p => p.theme.space[12]}px;
  padding-bottom: ${p => p.theme.space[18]}px;

  @media (min-width: 768px) {
    padding-top: ${p => p.theme.space[17]}px;
  }

  @media (min-width: 1280px) {
    padding-top: ${p => p.theme.space[16]}px;
    padding-bottom: ${p => p.theme.space[19]}px;
  }
`;

export const Title = styled('h2')`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xxl};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxxl};
  }
`;

export const SearchForm = styled('form')`
  position: relative;

  margin-top: 28px;

  @media (min-width: 768px) {
    width: 608px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`;
