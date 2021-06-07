import { List } from 'antd';
import Back from 'assets/svgr/Back';
import Discovery from 'assets/svgr/Discovery';
import ShieldDone from 'assets/svgr/ShieldDone';
import Users from 'assets/svgr/Users';
import CardProfileInfo from 'components/CardProfileInfo';
import SectionContent from 'components/SectionContent';
import React from 'react';
import { useTranslation } from 'react-i18next';
const MyWalletSummary = ({ viewOnly }) => {
  const { t } = useTranslation();
  const cardProfileInfoData = [
    { title: t(`Follower`), value: '1,4k', icon: <Users />, active: true },
    { title: t(`Following`), value: '1,4k', icon: <ShieldDone />, active: true },
    { title: t(`Ref`), value: '60', icon: <Back />, active: !viewOnly },
    { title: t(`My Token`), value: '10,000', icon: <Discovery />, active: true },
  ];
  const data = cardProfileInfoData.filter((i) => i.active);
  const numItems = data.length;
  return (
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
  );
};

export default MyWalletSummary;
