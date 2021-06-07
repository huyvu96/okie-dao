import { Carousel } from 'antd';
import React from 'react';
import BannerImage from 'assets/pngs/banner.png';

const Banner = ({ images }) => {
  return (
    <Carousel autoplay className="w-full">
      <img alt="img" src={BannerImage} className="h-full w-full" />
    </Carousel>
  );
};

export default React.memo(Banner);
