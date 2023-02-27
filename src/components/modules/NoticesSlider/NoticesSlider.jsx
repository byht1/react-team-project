import React from 'react';
import Slider from 'react-slick';

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SimpleSlider(props) {
  const { settings, children } = props;
  return <Slider {...settings}>{children}</Slider>;
}
