import { List, Space } from 'antd';
import { ReactComponent as Back } from 'assets/svgs/back.svg';
import { ReactComponent as Shield } from 'assets/svgs/shield.svg';
import { ReactComponent as Token } from 'assets/svgs/token.svg';
import { ReactComponent as Users } from 'assets/svgs/users.svg';
import CardProfileInfo from 'components/CardProfileInfo';
import SectionContent from 'components/SectionContent';
import SideMenuContainer from 'components/SideMenuContainer';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import PostTaskEvent from './PostTaskEvent';
import TrafficUser from './TrafficUser';
import UserAndToken from './UserAndToken';
const AdminOverView = () => {
  const { t } = useTranslation();
  const cardSummaryData = [
    {
      title: t(`User Trafic`),
      value: '1,4k',
      icon: <Users stroke={'#45CE91'} strokeWidth={0.5} />,
      active: true,
    },
    {
      title: t(`Following`),
      value: '1,4k',
      icon: <Shield stroke={'#FFAB00'} strokeWidth={0.5} />,
      active: true,
    },
    {
      title: t(`Post`),
      value: '60',
      icon: <Back stroke={'#556DF6'} strokeWidth={0.5} />,
      active: true,
    },
    {
      title: t(`My Token`),
      value: '10,000',
      icon: <Token stroke={'#E4948F'} strokeWidth={0.5} />,
      active: true,
    },
  ];
  const data = cardSummaryData.filter((i) => i.active);
  const numItems = data.length;
  return (
    <SideMenuContainer>
      <Space direction="vertical" size={30} className="w-full">
        <SectionContent>
          <List
            grid={{
              gutter: numItems * 4,
              xs: 1,
              sm: numItems - 1,
              md: numItems,
              lg: numItems,
              xl: numItems,
              xxl: numItems,
            }}
            dataSource={data}
            renderItem={(item, index) =>
              item.active && (
                <List.Item style={{ marginBottom: 0 }}>
                  <CardProfileInfo className="flex-1" {...item} type={index + 1} />
                </List.Item>
              )
            }
          />
        </SectionContent>
        <TrafficUser />
        <UserAndToken />
        <PostTaskEvent />
      </Space>
    </SideMenuContainer>
  );
};

export default memo(connectCommand(AdminOverView));
