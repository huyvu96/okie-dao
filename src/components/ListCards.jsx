import { Space, Typography } from 'antd';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

const ListCards = React.memo(({ title, data, renderItem, separator = 30, onViewAll }) => {
  const { t } = useTranslation();
  return (
    <Space direction={'vertical'} className="flex flex-1 w-full">
      <div className="flex justify-between items-center">
        <Text className="font-semibold text-[20px]">{title}</Text>
        {!!onViewAll && (
          <Text onClick={onViewAll} className="cursor-pointer">
            {t('VIEW ALL')}
          </Text>
        )}
      </div>
      <div className="flex overflow-x-auto py-2">
        {data?.map((item, index) => (
          <div key={index} style={{ marginLeft: index === 0 ? 0 : separator }}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </Space>
  );
});

export default memo(ListCards);
