import { List } from 'antd';
import { ReactComponent as Back } from 'assets/svgs/back.svg';
import { ReactComponent as ShieldDone } from 'assets/svgs/shieldDone.svg';
import { ReactComponent as Users } from 'assets/svgs/users.svg';
import CardProfileInfo from 'components/CardProfileInfo';
import SectionContent from 'components/SectionContent';
import React from 'react';
import { useTranslation } from 'react-i18next';

const TaskSummaryDetails = ({ viewOnly }) => {
  const { t } = useTranslation();
  const cardProfileInfoData = [
    {
      title: t(`View`),
      value: '1,4k',
      icon: <Users stroke={'#45CE91'} strokeWidth={0.5} />,
      active: true,
    },
    {
      title: t(`Done`),
      value: '1,4k',
      icon: <ShieldDone stroke={'#FFAB00'} strokeWidth={0.5} />,
      active: true,
    },
    {
      title: t(`Cancel`),
      value: '60',
      icon: <Back stroke={'#556DF6'} strokeWidth={0.5} />,
      active: !viewOnly,
    },
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

export default TaskSummaryDetails;
