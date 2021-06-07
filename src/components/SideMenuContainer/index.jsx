import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Menu from 'antd/es/menu';
import LayoutContainer from 'components/LayoutContainer';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as Chart } from '../../assets/svgs/Chart.svg';
import { ReactComponent as Post } from '../../assets/svgs/post.svg';
import { ReactComponent as Ranking } from '../../assets/svgs/ranking.svg';
import { ReactComponent as Signal } from '../../assets/svgs/signal.svg';
import { ReactComponent as StarOutLine } from '../../assets/svgs/starOutLine.svg';
import { ReactComponent as Task } from '../../assets/svgs/task.svg';
import { ReactComponent as Token } from '../../assets/svgs/token.svg';
import { ReactComponent as User } from '../../assets/svgs/user.svg';
import './SideMenuContainer.scss';

const SideMenuContainer = ({ children }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const history = useHistory();
  return (
    <LayoutContainer containerClass={'items-start'} contentClass={'left-sider'}>
      <Sider width={250} className="h-full">
        <Menu
          mode="vertical"
          defaultSelectedKeys={[location.pathname]}
          style={{ height: '100%', borderRight: 0, paddingTop: 30 }}>
          <Menu.Item
            key="/admin/manage/over-view"
            icon={<Chart />}
            onClick={() => history.push('/admin/manage/over-view')}>
            {t('Over view')}
          </Menu.Item>
          <span className={'manage-text'}>{t('MANAGE')}</span>
          <Menu.Item
            key="/admin/manage/task"
            icon={<Task />}
            onClick={() => history.push('/admin/manage/task')}>
            {t('Tasks')}
          </Menu.Item>
          <Menu.Item
            key="/admin/manage/event"
            icon={<StarOutLine fill={'#3B3F45'} />}
            onClick={() => history.push('/admin/manage/event')}>
            {t('Event')}
          </Menu.Item>
          <Menu.Item
            key="/admin/manage/post"
            icon={<Post />}
            onClick={() => history.push('/admin/manage/post')}>
            {t('Post')}
          </Menu.Item>
          <Menu.Item
            key="/admin/manage/staffs"
            icon={<User />}
            onClick={() => history.push('/admin/manage/staffs')}>
            {t('Staffs')}
          </Menu.Item>
          <Menu.Item
            key="/admin/manage/ranking"
            icon={<Ranking />}
            onClick={() => history.push('/admin/manage/ranking')}>
            {t('Ranking')}
          </Menu.Item>
          <Menu.Item
            key="/admin/manage/token"
            icon={<Token />}
            onClick={() => history.push('/admin/manage/token')}>
            {t('Token')}
          </Menu.Item>
          <Menu.Item
            key="/admin/manage/signal"
            icon={<Signal />}
            onClick={() => history.push('/admin/manage/signal')}>
            {t('Signal')}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout.Content className={'p-[30px] scroll'}>{children}</Layout.Content>
    </LayoutContainer>
  );
};

export default memo(connectCommand(SideMenuContainer));
