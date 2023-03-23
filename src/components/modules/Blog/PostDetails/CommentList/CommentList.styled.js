import styled from 'styled-components';

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
        gap: 16px
    }

    @media screen and (min-width: 1280px) {
        gap: 32px
    }
`

export const ImgComment = styled.img`
    flex-grow: 0;
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
        padding: 32px;
    }
`

export const CommentText = styled.span`
    font-weight: ${p => p.theme.fontWeights.average};
    line-height: ${p => p.theme.lineHeights.min};
`

export const CommentDate = styled.p`
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.g};
`