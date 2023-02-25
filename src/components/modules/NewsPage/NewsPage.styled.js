import styled from 'styled-components';
import { TitleH2 } from 'components/global/text';
import { Text } from 'components/global/text';

export const NewBlock = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 40px;
  }
  @media (min-width: 1280px) {
    padding-top: 19px;
    padding-bottom: 100px;
  }
`;
export const TitleNews = styled(TitleH2)`
  margin-bottom: 28px;
  font-size: 24px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;
export const LinkText = styled(Text)`
transition: transform 250ms linear;
  &:hover {
    transform: scale(1.05);
  }
`;

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1248px;
  margin-top: 40px;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 60px;
    gap: 60px 0px;
  }
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    width: 336px;
    height: 288px;
  }
  @media (min-width: 1280px) {
    width: 395px;
    height: 266px;
  }
`;
export const NewsMore = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Line = styled.div`
  width: 71%;
  height: 4px;
  border-radius: ${p => p.theme.radii.inputRadius};
  background: var(--gradient);
  margin-bottom: 4px;

  @media (min-width: 768px) {
    width: 280px;
    height: 8px;
  }
  @media (min-width: 1280px) {
    width: 340px;
  }
`;
