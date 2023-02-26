import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';


export const ImgPost = styled.img`
background: #gray;
flex-grow: 0;
width: 100%;
height: auto;
border-radius: ${p => p.theme.radii.inputRadius};
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
object-fit: cover;

@media screen and (min-width: 768px) {
  height: 240px;
  width: 240px;
  
}
@media screen and (min-width: 1280px) {
  height: 320px;
  width: 320px;

}

`;

export const BoxCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background: white;
padding: 40px 30px;
border-radius: ${p => p.theme.radii.inputRadius};

@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }
  @media screen and (min-width: 1280px) {
    gap: 75px;
  
  }
`
export const ContentBlock = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`
export const ImgBlock = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`;
 export const PostIcon = styled(AiOutlineLike)`
 fill: ${p => p.theme.colors.a};
  width: 25px;
  height: 25px;
 `
 export const LikeBlock = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
 `
 export const PostInfo = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 `