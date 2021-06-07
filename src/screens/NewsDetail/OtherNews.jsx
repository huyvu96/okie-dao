import { Card, Space, Typography } from 'antd';
import DollarImage from 'assets/pngs/dollar.png';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const { Text } = Typography;

const OtherNews = React.memo(() => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Card title={t(`Other news`)} onClick={() => history.push('/news/2')}>
      <Space direction="vertical" size={20}>
        {[1, 2, 3, 4].map((item) => {
          return (
            <div className="flex flex-row items-center cursor-pointer rounded-[8px]">
              <img alt="img" src={DollarImage} className="w-[108px] h-[68px] rounded-[8px]" />
              <div className="flex flex-col ml-[15px]">
                <Text className="font-semibold !mb-[4px] leading-[20px]">
                  Vestibulum est, lectus est in varius
                </Text>
                <Text type="secondary" className="text-[12px]">
                  May 4, 2021
                </Text>
              </div>
            </div>
          );
        })}
      </Space>
    </Card>
  );
});

export default OtherNews;
