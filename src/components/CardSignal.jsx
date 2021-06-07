import React from 'react';
import CardImage from 'components/CardImage';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Text, Title } = Typography;

const CardSignal = React.memo(({ imgSrc, name, entry, target, stl }) => {
  const { t } = useTranslation();
  return (
    <CardImage imgSrc={imgSrc} gradientShadow={true}>
      <Text className="text-[16px] font-semibold leading-[16px]">{name}</Text>
      <div className="flex flex-row leading-[14px] mt-[10px]">
        <Text className="w-[60px]">Entry:</Text>
        <Text type="danger" className="font-bold">
          {entry}
        </Text>
      </div>

      <div className="flex flex-row eading-[14px]">
        <Text className="w-[60px]">Target:</Text>
        <Text type="success" className="font-bold">
          {target}
        </Text>
      </div>

      <div className="flex flex-row leading-[14px]">
        <Text className="w-[60px]">Stl:</Text>
        <Text className="font-bold">{stl}</Text>
      </div>
    </CardImage>
  );
});

export default CardSignal;
