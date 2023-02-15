import styled from 'styled-components';
  
export const Input = styled.input`
    display: inline-block;
    width: 608px;
    font-size: 20px;
    padding: 10px 12px 10px 20px;
    color: #535353;
    border: none;
    outline: none;
    box-shadow: 7px 4px 14px 0px rgba(49, 21, 4, 0.07);
    border-radius: 14px;
    &:hover,
    &:focus{
        border: 1px solid rgba(245, 146, 86, 0.5);
    }
`
export const List = styled.ul`
margin: 0 auto;
padding: 0;
list-style: none;
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
`
export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 395px;
height: 314px;
`
export const NewsMore = styled.div`
display: flex;
justify-content: space-between;
`
export const Line = styled.div`
width: 340px;
height: 8px;
border-radius: 40px;
background: linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%);
margin-bottom: 4px;
margin-top: 60px;
`
export const Label = styled.label`
text-align: center;
`