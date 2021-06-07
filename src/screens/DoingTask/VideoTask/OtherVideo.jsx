import { Card, Space, Typography } from 'antd';
import DollarImage from 'assets/pngs/dollar.png';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ReactComponent as PlayButton } from 'assets/svgs/playButton.svg';

const { Text } = Typography;

const OtherVideos = React.memo(() => {
  const { t } = useTranslation();
  const history = useHistory();
  let thumbnailUrl = 'https://img.youtube.com/vi/QqsLTNkzvaY/0.jpg';
  return (
    <Card title={t(`Other Video`)}>
      <Space direction="vertical" size={20}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className="flex flex-row items-center cursor-pointer rounded-[8px]"
              onClick={() => history.push('/task/video/' + index)}>
              <div className="relative">
                <img alt="img" src={thumbnailUrl} className="w-[108px] h-[68px] rounded-[8px]" />
                <div className="absolute" style={{ top: 20, left: 40 }}>
                  <PlayButton />
                </div>
              </div>
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

export default OtherVideos;
