import styled from 'styled-components';

export const ImgComment = styled.img`
flex-grow: 0;
width: 70px;
height: 70px;
border-radius: ${p => p.theme.radii.round};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
object-fit: cover;

`
export const Item = styled.li`
    width: 100%;
    min-height: 70px;
    display: flex;
    gap: 25px;
`
export const List = styled.ul`
display:flex;
flex-direction: column;
gap: 20px;

`
export const Feedback = styled.div`
 background: white;
 padding: 15px 30px;
 border-radius: ${p => p.theme.radii.inputRadius};
 box-shadow: ${p => p.theme.shadows.s};
`