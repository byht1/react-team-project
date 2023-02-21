import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';  
import {TitleH2} from 'components/global/text';

export const NewBlock = styled.div`
margin: 0 auto;
@media (min-width: 768px) {
  padding-top: 40px;
}
@media (min-width: 1280px) {
  padding-top: 19px;
  padding-bottom: 100px;
}
`
export const TitleNews = styled(TitleH2)`
margin-bottom: 28px;
font-size: 24px;
      @media (min-width: 768px) {
        margin-bottom: 40px;
        font-size: 48px;
      }
     
`
export const Input = styled.input`
    width: 100%;
    font-size: ${p => p.theme.fontSizes.m};
    padding: 9px 12px 9px 12px;
    color: #535353;
    border: 1px solid ${p => p.theme.colors.trsp};
    outline: none;
    box-shadow: ${p => p.theme.shadows.s};
    border-radius: ${p => p.theme.radii.normal};
    &::placeholder {
      color: #535353;
    }
    transition: var(----transition-border-color);
    &:hover,
    &:focus{
        border: 1px solid rgba(245, 146, 86, 0.5);
    }
    @media (min-width: 768px) {
        width: 608px;
        font-size: ${p => p.theme.fontSizes.xl};
        padding: 9px 12px 9px 20px;
        border-radius: ${p => p.theme.radii.inputRadius};
      }
      @media (min-width: 1280px) {
        padding: 10px 12px 10px 20px;
        border-radius: ${p => p.theme.radii.normal};
      }
`
export const List = styled.ul`
margin: 0 auto;
padding: 0;
list-style: none;
 display: flex;
 justify-content: center;
 flex-direction: column;
 flex-wrap: wrap;
 max-width: 1248px;
 @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
margin-top: 40px;

@media (min-width: 768px) {
    width: 336px;
    height: 288px;
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    width: 395px;
    height: 266px;
  
  }
`
export const NewsMore = styled.div`
display: flex;
justify-content: space-between;
`
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

`
export const Block = styled.div`
position: relative;
@media (min-width: 768px) {
  margin: 0 auto;
  // width: 608px;
}
@media (min-width: 1280px) {

}


`
export const Button = styled.button`
position: absolute;
top: 10px;
right: 12px;
width: 20px;
height: 20px;
border-radius: ${p => p.theme.radii.round};
background: ${p => p.theme.colors.trsp};

@media (min-width: 768px) {
  width: 24px;
  height: 24px;
}
`
export const Icon = styled(IoMdSearch)`
width: 20px;
height: 20px;
fill: ${p => p.theme.colors.b};
@media (min-width: 768px) {
  width: 24px;
  height: 24px;
}
`

