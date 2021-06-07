import { openModal } from '@doopage/use-modal';
import { Breadcrumb, Button, Space, Typography } from 'antd';
import CardNews from 'components/CardNews';
import LayoutContainer from 'components/LayoutContainer';
import SectionContent from 'components/SectionContent';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import TaskSummaryDetails from 'screens/AdminManageTaskDetail/TaskSummaryDetails';
import Chart from 'screens/Profile/Chart';
import { ModalName } from 'utils/constants';
import { titleCase } from 'utils/format';
import './AdminManageTaskDetail.scss';

const { Title, Text } = Typography;

const AdminManageTaskDetail = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer containerClass={'items-start'} contentClass={'!max-w-none'}>
      <div className="p-[30px]">
        <Breadcrumb className="admin-details-post antd-breadcrumb" separator=">">
          <Breadcrumb.Item>
            <a href="/admin/manage/task">{t(`Manage Task`)}</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">{titleCase(window.location.pathname.split('/')[3])}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={'flex flex-row pt-[30px]'}>
          <CardNews
            imgSrc={'https://picsum.photos/108/68'}
            category={'ENHANCE'}
            title={'Rumors of PayPal shaking hands with Avalanche '}
            rating={4.5}
          />
          <Space direction={'vertical'} className={'flex pl-[30px] w-full'}>
            <TaskSummaryDetails />
            <SectionContent>
              <Space className="flex flex-row w-full justify-between items-center">
                <Title level={4}>{t(`User View`)}</Title>
                <Space>
                  <Button
                    className={'btn btn-view dark:text-black'}
                    onClick={() => openModal(ModalName.viewAllUserModal)}>
                    {t(`View`)}
                  </Button>
                  <Button className={'btn btn-like dark:text-black'}>{t(`Done`)}</Button>
                  <Button className={'btn btn-like dark:text-black'}>{t(`Cancel`)}</Button>
                </Space>
              </Space>

              <Chart type="line" width={'100%'} height={360} />
            </SectionContent>
          </Space>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default memo(connectCommand(AdminManageTaskDetail));
