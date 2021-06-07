import { Card, Typography } from 'antd';
import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Users } from 'assets/svgs/users.svg';
import { ReactComponent as Clock } from 'assets/svgs/clockOutline.svg';

import { thousandSeparator } from 'utils/format';

const { Text } = Typography;

const CardDetail = React.memo(({ date, time, title, host, attendees }) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full" bodyStyle={{ padding: 30 }}>
      <img
        alt="img"
        src={'https://snipboard.io/YZ196v.jpg'}
        className="h-[300px] w-full mb-[20px] rounded-[15px]"
      />
      <div className="flex flex-row relative overflow-hidden">
        <div className="w-[52px] h-[60px] flex flex-col items-center justify-center rounded-[10px] border-[#D8DEEB] border-[1px]">
          <Text type={'secondary'} className="text-[12px] leading-[16px]">
            {moment(date).format('MMM')}
          </Text>
          <Text className="!text-primary font-semibold text-[18px] leading-[18px]">
            {moment(date).format('DD')}
          </Text>
        </div>
        <div className="flex flex-col flex-1 mx-[16px]">
          <Text className="semi-bold text-[18px] leading-[18px]">{title}</Text>

          <div className="flex flex-row mt-[15px] w-full items-center">
            <Text type="secondary" className="mb-[10px] !font-semibold">
              {t('HOSTED BY') + ' '}
              <span className="primary-color">{host}</span>
            </Text>
            <div className="flex flex-row ml-[30px] items-center">
              <Users />
              <Text className="ml-[6px]">{thousandSeparator(attendees) + ' ATTENDEES'}</Text>
            </div>

            <div className="flex flex-row items-center ml-[30px] fint">
              <Clock />
              <Text className="ml-[12px]">{time}</Text>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
});

export default CardDetail;
