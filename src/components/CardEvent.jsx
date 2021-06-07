import React from 'react';
import CardImage from 'components/CardImage';
import { Typography, Space, Divider } from 'antd';
import { ReactComponent as Calendar } from '../assets/svgs/calendar.svg';
import { ReactComponent as Users } from '../assets/svgs/users.svg';
import { useTranslation } from 'react-i18next';
import { thousandSeparator } from '../utils/format';
import { useHistory } from 'react-router-dom';

const { Text, Title } = Typography;

const CardEvent = React.memo(
  ({ imgSrc, host, title, address, rating, participants, date, badge }) => {
    const { t } = useTranslation();
    const history = useHistory();
    return (
      <CardImage imgSrc={imgSrc} onClick={() => history.push('/event/1')}>
        <div className="flex flex-col relative">
          <div className="absolute top-[-50px] right-[-20px] rounded-tl-[8px] overflow-hidden">
            {badge}
          </div>
          <Text type="secondary" className="mb-[10px] text-[12px] leading-[12px]">
            {t('HOSTED BY') + ' '}
            <span className="primary-color">{host}</span>
          </Text>
          <Text className="text-[16px] font-semibold leading-[16px] mb-[10px]">{title}</Text>
          <Text className="mb-[15px] ">{address}</Text>
          <Space>
            <Space>
              <Calendar fill="#C5CAD3" />
              <Text type="secondary">{date}</Text>
            </Space>
            <Divider type="vertical" />
            <Space>
              <Users />
              <Text type="secondary">{thousandSeparator(participants)}</Text>
            </Space>
          </Space>
        </div>
      </CardImage>
    );
  },
);

export default CardEvent;
