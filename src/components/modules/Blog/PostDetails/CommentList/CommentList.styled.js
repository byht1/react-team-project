import styled from 'styled-components';
import { ReactComponent as trashBin } from '../../../../../img/User/trashBin.svg';

export const List = styled.ul`
    display:flex;
    flex-direction: column;
    gap: 20px;
`

export const Item = styled.li`
    width: 100%;
    min-height: 70px;
    display: flex;
    gap: 8px;

    @media screen and (min-width: 768px) {
        gap: 16px;
    }

    @media screen and (min-width: 1280px) {
        gap: 32px;
    }
`

export const ImgComment = styled.img`
    flex-grow: 0;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: ${p => p.theme.radii.round};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    @media screen and (min-width: 768px) {
        width: 50px;
        height: 50px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 70px;
        height: 70px;
    }
`

export const Feedback = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: white;
    padding: 16px;
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.s};
    
    @media screen and (min-width: 1280px) {
        padding: 24px;
    }
`

export const CommentText = styled.span`
    font-weight: ${p => p.theme.fontWeights.average};
    line-height: ${p => p.theme.lineHeights.min};
`

export const CommentFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`

export const CommentDate = styled.p`
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.g};
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  
  width: 18px;
  height: 18px;

  color: rgba(17, 17, 17, 0.6);
  background-color: transparent;
  
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`

export const TrashBinIc = styled(trashBin)`
  height: 18px;
  width: 18px;

  & path {
    stroke: ${p => p.theme.colors.w};
    fill: ${p => p.theme.colors.g};
    transition: fill 250ms linear;
  }

  &:hover path {
    fill: ${p => p.theme.colors.a};
  }
`;