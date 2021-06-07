import {connectCommand} from 'meta/reducer';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import './AdminManagePost.scss';
import SideMenuContainer from "components/SideMenuContainer";
import SectionContent from "components/SectionContent";
import {Badge, Button, Input, Space, Typography,} from "antd";
import Search from "assets/svgr/Search";
import ManagePostTable from "./ManagePostTable";


const {Title, Text} = Typography;

const AdminManagePost = ({}) => {
    const {t} = useTranslation();
    return (
        <SideMenuContainer>
            <Space size={30} direction={'vertical'} className="flex flex-1 w-full">
                <SectionContent>
                    <div className="flex flex-row w-full justify-between items-center">
                        <Space size={1}>
                            <Title level={4}>{t(`Waiting for approve`)}</Title>
                            <Badge overflowCount={999} count={12321} className={'badge'}/>
                        </Space>

                        <Input
                            className="max-w-[340px] h-[42px]"
                            placeholder={t(`Search`)}
                            prefix={<Search/>}
                            type="search"
                        />
                    </div>
                    <ManagePostTable/>
                </SectionContent>
                {/**/}
                <SectionContent>
                    <div className="flex flex-row w-full justify-between items-center">
                        <Space size={1}>
                            <Title level={4}>{t(`All post`)}</Title>
                            <Badge overflowCount={999} count={12321} className={'badge'}/>
                        </Space>
                        <Space>
                            <Input
                                className="w-[340px] h-[42px]"
                                placeholder={t(`Search`)}
                                prefix={<Search/>}
                                type="search"
                            />
                            <Button type="primary">
                                {t(`New Post`)}
                            </Button>
                            <Button className={'btn-draft'}>
                                {t(`Your Draft`)}
                                <Text className={'!primary-color ml-0.5 '}>5</Text>
                            </Button>
                        </Space>
                    </div>
                    <ManagePostTable/>
                </SectionContent>
            </Space>
        </SideMenuContainer>

    );
};

export default memo(connectCommand(AdminManagePost));
