import { Badge, Button, Input, Space, Typography } from 'antd';
import Search from 'assets/svgr/Search';
import SectionContent from 'components/SectionContent';
import SideMenuContainer from 'components/SideMenuContainer';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import './AdminManageTask.scss';
import { useHistory } from 'react-router-dom';
import ManageTaskTable from './ManageTaskTable';

const { Title } = Typography;

const AdminManageTask = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <SideMenuContainer>
      <Space size={30} direction={'vertical'} className="flex flex-1 w-full">
        <SectionContent>
          <div className="flex flex-row w-full justify-between items-center">
            <Space size={1}>
              <Title level={4}>{t(`All Mission`)}</Title>
              <Badge overflowCount={999} count={252} className={'badge'} />
            </Space>
            <Space>
              <Input
                className="max-w-[340px] h-[42px]"
                placeholder={t(`Search`)}
                prefix={<Search />}
                type="search"
              />
              <Button type="primary" onClick={() => history.push('/mission/create')}>
                {t(`New Mission`)}
              </Button>
            </Space>
          </div>
          <ManageTaskTable />
        </SectionContent>
      </Space>
    </SideMenuContainer>
  );
};

export default memo(connectCommand(AdminManageTask));
