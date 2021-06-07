import { Badge, Button, Input, Space, Typography } from 'antd';
import Search from 'assets/svgr/Search';
import SectionContent from 'components/SectionContent';
import SideMenuContainer from 'components/SideMenuContainer';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import './AdminManageEvent.scss';
import ManageEventTable from './ManageEventTable';

const { Title, Text } = Typography;

const AdminManageEvent = () => {
  const { t } = useTranslation();
  return (
    <SideMenuContainer>
      <Space size={30} direction={'vertical'} className="flex flex-1 w-full">
        <SectionContent>
          <div className="flex flex-row w-full justify-between items-center">
            <Space size={1}>
              <Title level={4}>{t(`All Event`)}</Title>
              <Badge overflowCount={999} count={252} className={'badge'} />
            </Space>
            <Space>
              <Input
                className="max-w-[340px] h-[42px]"
                placeholder={t(`Search`)}
                prefix={<Search />}
                type="search"
              />
              <Button type="primary">{t(`New Event`)}</Button>
            </Space>
          </div>
          <ManageEventTable />
        </SectionContent>
      </Space>
    </SideMenuContainer>
  );
};

export default memo(connectCommand(AdminManageEvent));
