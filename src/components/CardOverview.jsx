import React from 'react';
import { Card, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TickSquare } from 'assets/svgs/tickSquare.svg';
import { ReactComponent as Calendar } from 'assets/svgs/calendar.svg';
import { ReactComponent as StarOutline } from 'assets/svgs/starOutLine.svg';

const { Text } = Typography;

const CardOverview = React.memo(({ status, tokenRewards }) => {
  const { t } = useTranslation();

  return (
    <Card title={t(`Overview`)}>
      <Space direction="vertical" size={15} className="w-full">
        <div className="flex flex-row  w-full items-center py-[20px] px-[16px] rounded-[15px] bg-[#F5FCF9]">
          <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center bg-[#E5F6EF]">
            <TickSquare fill="#45CE91" />
          </div>
          <div className="flex flex-col ml-[16px]">
            <Text type="secondary" className="font-semibold leading-[14px]">
              Status
            </Text>
            <Text className="font-semibold leading-[18px] text-[18px] mt-[8px]"> {status}</Text>
          </div>
        </div>

        <div className="flex flex-row  w-full items-center py-[20px] px-[16px] rounded-[15px] bg-[#FFFBF1]">
          <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center bg-[#FBF0D9]">
            <Calendar fill="#FFAB00" />
          </div>
          <div className="flex flex-col ml-[16px]">
            <Text type="secondary" className="font-semibold leading-[14px]">
              Expires in
            </Text>
            <Text className="font-semibold leading-[18px] text-[18px] mt-[8px]">
              0 days 2 hours 7 min
            </Text>
          </div>
        </div>

        <div className="flex flex-row  w-full items-center py-[20px] px-[16px] rounded-[15px] bg-[#F4F6FD]">
          <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center bg-[#E3E7FE]">
            <StarOutline fill="#7084F7" />
          </div>
          <div className="flex flex-col ml-[16px]">
            <Text type="secondary" className="font-semibold leading-[14px]">
              Token rewards
            </Text>
            <Text className="font-semibold leading-[18px] text-[18px] mt-[8px]">
              {tokenRewards}
            </Text>
          </div>
        </div>
      </Space>
    </Card>
  );
});

export default CardOverview;
