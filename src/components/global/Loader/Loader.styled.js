import styled from 'styled-components';
import { ThreeCircles } from 'react-loader-spinner';

export const NewLoader = styled(ThreeCircles)`
        position: relative;
        top: 50%;
        left: 50%;
        height="100"
        width="100"
        margin-top: -50px;
        margin-left: -50px;
        color: red;
`

export const Block = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #FDF7F2;
       
`