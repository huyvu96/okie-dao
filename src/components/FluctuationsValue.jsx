import { Typography } from 'antd';
import { ReactComponent as TriangleDown } from 'assets/svgs/triangleDown.svg';
import { ReactComponent as TriangleUp } from 'assets/svgs/triangleUp.svg';
import React from 'react';

const { Text } = Typography;

const FluctuationsValue = ({ value = 0 }) => {
  const isNegative = +value < 0;
  return (
    <div className="flex flex-row items-center">
      {!isNegative ? <TriangleUp /> : <TriangleDown />}
      <Text className={`ml-[5px] !text-sm ${isNegative ? `text-[#FF6969]` : `text-[#2BC9BB]`}`}>
        {value}%
      </Text>
    </div>
  );
};

export default React.memo(FluctuationsValue);
