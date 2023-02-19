import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';  

export const Input = styled.input`
    width: 280px;
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
width: 280px;
height: 348px;

@media (min-width: 768px) {
    width: 336px;
    height: 348px;
  }
  @media (min-width: 1280px) {
    width: 395px;
    height: 314px;
  
  }
`
export const NewsMore = styled.div`
display: flex;
justify-content: space-between;
`
export const Line = styled.div`
width: 200px;
height: 4px;
border-radius: ${p => p.theme.radii.inputRadius};
// background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
background: var(--gradient);
margin-bottom: 4px;
margin-top: 40px;

@media (min-width: 768px) {
    width: 280px;
    height: 8px;
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    width: 340px;
    
  }

`
export const Block = styled.div`
position: relative;
margin: 0 auto;

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
export const SvgContainer = styled.div`
// width: 280px;
// @media (min-width: 768px) {
//   width: 608px;
// }
`
