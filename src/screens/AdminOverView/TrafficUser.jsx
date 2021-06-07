import { Typography } from 'antd';
import SectionContent from 'components/SectionContent';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'screens/Profile/Chart';
const { Title } = Typography;

const TrafficUser = () => {
  const { t } = useTranslation();

  return (
    <SectionContent>
      <Title level={4}>{t(`Traffic User`)}</Title>
      <Chart type="line" width={'100%'} height={360} />
    </SectionContent>
  );
};

export default memo(connectCommand(TrafficUser));
