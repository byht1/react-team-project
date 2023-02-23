import { ThreeCircles } from 'react-loader-spinner';
import { Block } from './Loader.styled';
import { PropTypes } from 'prop-types';
import { Box } from '../Box';

export const Loader = (opacity = 1) => {
  return (
    <Box position="fixed" top="0" bottom="0" left="0" right="0" zIndex="1000">
      <Block opacity={opacity}>
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
    </Box>
  );
};

Loader.propTypes = {
  opacity: PropTypes.number,
};
