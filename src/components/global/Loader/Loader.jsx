import { ThreeCircles } from 'react-loader-spinner';
import { Block } from './Loader.styled';

export const Loader = () =>{
    return (
        <Block>
           <ThreeCircles
                height="100"
                width="100"
                color=""
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#F59256"
                innerCircleColor="#111111"
                middleCircleColor="#F59256"
        />
        </Block>
    
    )
}
