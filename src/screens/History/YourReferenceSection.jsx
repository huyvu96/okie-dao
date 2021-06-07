import {Avatar, Badge, Button, Card, Input, List, Modal, Space, Typography} from "antd";
import Search from "assets/svgr/Search";
import React from "react";
import {useTranslation} from "react-i18next";
import {ReactComponent as ShieldDone} from "assets/svgs/shieldDone.svg";
import InfiniteScroll from "react-infinite-scroller";
import {openModal} from "@doopage/use-modal";
import {ModalName} from "utils/constants";
const {Title, Text} = Typography;

const YourReferenceSection = (props) => {
    const {t} = useTranslation();
    const data = Array(15)
        .fill(0)
        .map((_, index) => index);
    const openViewAll = () => {
        openModal(ModalName.viewAllUserModal, {
            data: {
                title:t('Your Reference')
            },
        });
    }
    return (
        <Card className="w-[790px] h-[412px] px-[15px] py-[15px]">
            <div className="flex flex-row w-full justify-between items-center">
                <Space size={1}>
                    <Title level={4}>{t(`Your Reference`)}</Title>
                    <Badge overflowCount={999} count={12321} className={'badge'}/>
                </Space>
                <Space>
                    <Input
                        className="w-[340px] h-[42px]"
                        placeholder={t(`Search`)}
                        prefix={<Search/>}
                        type="search"
                    />
                    <Button className={'btn-light-purple'} onClick={openViewAll}>
                        {t(`View all`)}
                    </Button>
                </Space>
            </div>
            <div className={'mt-[30px] max-h-[550px] overflow-auto'}>
            <List
                grid={{gutter: 16, column: 3}}
                dataSource={data}
                loadMore={true}
                renderItem={item => (
                    <List.Item>
                        <Space className={'flex flex-row items-center'}>
                            <div className={'relative'}>
                                <Avatar size={40} src={'https://i.pravatar.cc/302'}/>
                                <div className={'absolute top-0 right-0'}>
                                    <ShieldDone fill={'#ffffff'}/>
                                </div>
                            </div>

                            <div className={'flex flex-col'}>
                                <Text className="w-[200px] !text-sm !font-semibold" ellipsis>{'User Name'}</Text>
                                <Text className="!text-xs text-[#605D68] font-normal w-[70px]"
                                      ellipsis>{'@avc'}</Text>
                            </div>
                        </Space>
                    </List.Item>
                )}
            />
            </div>

        </Card>
    )
}
export default YourReferenceSection;