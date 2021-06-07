import { List } from 'antd';
import CardProfileInfo from 'components/CardProfileInfo';
import SectionContent from 'components/SectionContent';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Users } from 'assets/svgs/users.svg';
import { ReactComponent as Like } from 'assets/svgs/like.svg';
import { ReactComponent as Share } from 'assets/svgs/share.svg';

const PostSummaryDetails = ({ viewOnly }) => {
    const { t } = useTranslation();
    const cardProfileInfoData = [
        { title: t(`User View`), value: '1,4k', icon: <Users stroke={'#45CE91'} strokeWidth={0.5} />, active: true },
        { title: t(`User Like`), value: '1,4k', icon: <Like stroke={'#FFAB00'} strokeWidth={0.5}/>, active: true },
        { title: t(`User Share`), value: '60', icon: <Share stroke={'#556DF6'} strokeWidth={0.5}/>, active: !viewOnly },
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

export default PostSummaryDetails;
