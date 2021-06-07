import { openModal } from '@doopage/use-modal';
import { Avatar, Badge, Button, Dropdown, Layout, Menu, Space, Typography } from 'antd';
import { ReactComponent as Document } from 'assets/svgs/document.svg';
import { ReactComponent as Logout } from 'assets/svgs/logout.svg';
import { ReactComponent as Notification } from 'assets/svgs/notification.svg';
import { ReactComponent as User } from 'assets/svgs/user.svg';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { connectCommand } from 'meta/reducer';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useCommon } from 'store/selector';
import { ModalName } from 'utils/constants';
import { middleEllipsis } from 'utils/format';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import { ReactComponent as Wallet } from '../../assets/svgs/wallet.svg';
import './LayoutContainer.scss';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const LayoutContainer = ({ children, contentClass, containerClass }) => {
  const history = useHistory();
  const wallet = useCommon('wallet', {});
  const connected = useCommon('connected', false);
  const { t } = useTranslation();
  const menu = (
    <Menu type="">
      <Menu.Item
        icon={<User />}
        onClick={() => {
          history.push('/profile');
        }}>
        {t(`Profile`)}
      </Menu.Item>
      <Menu.Item
        icon={<Document />}
        onClick={() => {
          history.push('/history');
        }}>
        {t(`History`)}
      </Menu.Item>
      <Menu.Item icon={<Notification />} onClick={() => {}}>
        {t(`Notification`)}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        icon={<User />}
        onClick={() => {
          history.push('/admin/manage/over-view');
        }}>
        {t(`Admin`)}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<Logout />} onClick={() => {}}>
        {t(`Logout`)}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={`flex flex-1 flex-col items-center ${containerClass}`}>
      <Header className="w-full flex flex-row shadow z-10">
        <Space className="header-left flex flex-row items-center">
          <div className="logo">
            <Logo onClick={() => history.push('/')} className="cursor-pointer" />
          </div>
          <Space className="flex flex-row items-center justify-center" size={60}>
            <Title
              level={4}
              className="hover:text-primary cursor-pointer"
              onClick={() => history.push('/')}>
              {t(`Home`)}
            </Title>
            <Title
              level={4}
              className="hover:text-primary cursor-pointer"
              onClick={() => history.push('/news')}>
              {t(`News`)}
            </Title>

            <Title
              level={4}
              className="hover:text-primary cursor-pointer"
              onClick={() => history.push('/sample')}>
              {t(`Sample`)}
            </Title>
          </Space>
        </Space>
        <div className="flex flex-row container justify-end items-center">
          <ThemeSwitcher />
          <Button
            className="!rounded-[10px] !h-[36px] !py-0 ml-[30px]"
            type="primary"
            onClick={() => openModal(ModalName.walletSelectorModal)}>
            <Space>
              {wallet?.connected && connected
                ? middleEllipsis(wallet?.publicKey.toBase58() || '')
                : 'Connect'}
              <Wallet />
            </Space>
          </Button>
          <Dropdown overlay={menu} className="!ml-[10px]">
            <span className="avatar-item">
              <Badge count={99} overflowCount={99} className="w-10px">
                <Avatar size={48}>U</Avatar>
              </Badge>
            </span>
          </Dropdown>
        </div>
      </Header>
      <Content className={`flex flex-col px-0 w-full max-w-[1440px] ${contentClass}`}>
        {children}
      </Content>
      <Footer className="flex flex-row justify-between items-center float-bottom w-full z-10 shadow">
        <div className="text-left">{t(`© Copyright by OkieDao 2021. All rights reserved`)}</div>
        <div className="flex flex-row">
          <label className="mx-5 cursor-pointer text-primary">{t(`About`)}</label>
          <label className="mx-5 cursor-pointer text-primary">{t(`FAQs`)}</label>
          <label className="mx-5 cursor-pointer text-primary">{t(`Support`)}</label>
          <label className="mx-5 cursor-pointer text-primary">{t(`Term of Services`)}</label>
        </div>
      </Footer>
    </div>
  );
};
export default memo(connectCommand(LayoutContainer));
