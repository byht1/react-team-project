import styled from 'styled-components';
  
export const Input = styled.input`
    width: 280px;
    font-size: 16px;
    padding: 9px 12px 9px 12px;
    color: #535353;
    border: none;
    outline: none;
    box-shadow: 7px 4px 14px 0px rgba(49, 21, 4, 0.07);
    border-radius: 20px;
    &:hover,
    &:focus{
        border: 1px solid rgba(245, 146, 86, 0.5);
    }
    @media (min-width: 768px) {
        width: 608px;
        font-size: 20px;
        padding: 9px 12px 9px 20px;
        border-radius: 40px;
      }
      @media (min-width: 1280px) {
        padding: 10px 12px 10px 20px;
        border-radius: 20px;
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
border-radius: 40px;
background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
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
text-align: center;

`
export const Button = styled.button`
position: absolute;
top: 10px;
right: 12px;
width: 24px;
height: 24px;
border-radius: 50%;
background: transparent;
fill: #111111;
`