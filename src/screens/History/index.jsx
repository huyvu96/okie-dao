import {Avatar, Button, Card, List, Space, Typography, Divider} from 'antd';
import LayoutContainer from 'components/LayoutContainer';
import {connectCommand} from 'meta/reducer';
import React, {memo} from 'react';
import {useScrollTop} from 'utils/hook';
import AdsImg from '../../assets/pngs/adsImg.png';
import HistoryTokenSection from "screens/History/HistoryTokenSection";
import PostSection from "screens/History/PostSection";
import YourReferenceSection from "screens/History/YourReferenceSection";
import FollowSection from "screens/History/FollowSection";
import {useTranslation} from "react-i18next";
import {ReactComponent as ShieldDone} from "assets/svgs/shieldDone.svg";

const {Title, Text} = Typography;
const data = Array(5)
    .fill(0)
    .map((_, index) => index);
const History = (props) => {
    const {t} = useTranslation();
    useScrollTop();
    return (
        <LayoutContainer contentClass={'h-full'}>
            <div className="p-[30px] px-[120px]">
                <Space direction={'vertical'} size={30}>
                    <HistoryTokenSection/>
                    <PostSection/>
                    <Space size={30} direction={'vertical'}>
                        <Space size={30}>
                            <YourReferenceSection/>
                            <Card bodyStyle={{padding: 0}}>
                                <img alt src={AdsImg} className="min-w-[380px] max-h-[412px]"/>
                            </Card>
                        </Space>
                        <Space size={30}>
                            <FollowSection/>
                            <Card className={'max-h-[412px] min-w-[380px] w-full '}>
                                <Title level={4}>{t(`Suggestion to follow`)}</Title>
                                <Divider />
                                <div className={'mt-[30px] overflow-auto'}>
                                    <List
                                        grid={{gutter: 16, column: 1}}
                                        dataSource={data}
                                        loadMore={true}
                                        renderItem={item => (
                                            <Space className={'flex flex-row justify-between px-[10px] items-center max-w-[360px] mb-[20px]'}>
                                                <Space className={'relative'}>
                                                    <Avatar size={40} src={'https://i.pravatar.cc/302'}/>
                                                    <Text className={'!text-sm !font-semibold'} ellipsis>{'User Name'}</Text>
                                                </Space>

                                                <Button
                                                    className="!rounded-[10px] !h-[36px] !py-0 ml-[30px]"
                                                    onClick={() => {
                                                    }}>
                                                    <Space>
                                                        <ShieldDone/>
                                                        <Text className={'!text-primary'} ellipsis>  {t(`Follow`)}</Text>

                                                    </Space>
                                                </Button>
                                            </Space>

                                        )}
                                    />
                                </div>
                            </Card>
                        </Space>
                    </Space>
                </Space>
            </div>
        </LayoutContainer>
    );
};

History.propTypes = {};

export default memo(connectCommand(History));
