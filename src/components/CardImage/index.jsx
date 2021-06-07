import { Card } from 'antd';
import React from 'react';
import './CardImage.scss';

const CardImage = React.memo(({ imgSrc, children, gradientShadow, ...rest }) => {
  return (
    <div className="card-image relative cursor-pointer">
      <div className={gradientShadow ? 'px-[1px] py-[1px]' : ''}>
        <div className={gradientShadow ? 'bg-gradient' : ''}>
          <Card
            className="w-[250px] z-10 shadow"
            cover={<img alt="img" src={imgSrc} className="h-[170px] w-full" />}
            {...rest}>
            {children}
          </Card>
        </div>
      </div>
      {gradientShadow && <div className="gradient z-0" />}
    </div>
  );
});

export default CardImage;
