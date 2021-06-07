import { Typography } from 'antd';
import SectionContent from 'components/SectionContent';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'screens/Profile/Chart';
const { Title } = Typography;

const UserAndToken = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row w-full items-center">
      <div className="flex-1">
        <SectionContent>
          <Title level={4}>{t(`User`)}</Title>
          <Chart type="line" width={'100%'} height={360} />
        </SectionContent>
      </div>
      <div className="flex-1">
        <SectionContent>
          <Title level={4}>{t(`Token`)}</Title>
          <Chart type="line" width={'100%'} height={360} />
        </SectionContent>
      </div>
    </div>
  );
};

export default memo(connectCommand(UserAndToken));
