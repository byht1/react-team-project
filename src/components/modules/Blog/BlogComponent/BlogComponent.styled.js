import styled from 'styled-components';
import { DarkBtn } from 'components/global/button';
import { TitleH2 } from 'components/global/text';

export const Title = styled(TitleH2)`
  margin-bottom: ${p => p.theme.space[8]}px;
  font-size: ${p => p.theme.fontSizes.xxl};
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[11]}px;
    font-size: ${p => p.theme.fontSizes.xxxxl};
  }
`;

export const ListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-top: 32px;
`;

export const LoadMoreBtn = styled(DarkBtn)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;

  background-color: ${p => p.isFetchingNextPage && p.theme.colors.tagBg};

  color: ${p => p.isFetchingNextPage && p.theme.colors.bt};
  border: ${p => p.isFetchingNextPage && `2px solid ${p.theme.colors.trsp}`};
  pointer-events: ${p => p.isFetchingNextPage && 'none'};
  cursor: ${p => (p.isFetchingNextPage ? 'not-allowed' : 'pointer')};
`;
