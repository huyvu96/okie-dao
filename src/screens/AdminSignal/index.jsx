import {connectCommand} from 'meta/reducer';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import './styles.scss';
import SideMenuContainer from "components/SideMenuContainer";
import SectionContent from "components/SectionContent";
import {Badge, Button, Input, Space, Typography,} from "antd";
import Search from "assets/svgr/Search";
import TableSignal from "./TableSignal";
import { useHistory } from 'react-router-dom';


const {Title, Text} = Typography;

const AdminSignal = ({children}) => {
    const {t} = useTranslation();
    const history = useHistory();
    return (
        <SideMenuContainer>
            <Space size={30} direction={'vertical'} className="flex flex-1 w-full">
                <SectionContent>
                    <Space className="flex flex-row w-full justify-between items-center">
                        <Space size={1}>
                            <Title level={4}>{t(`All Signal`)}</Title>
                            <Badge overflowCount={250} count={12321} className={'badge'}/>
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
                        </Space>
                    </Space>
                    <TableSignal/>
                </SectionContent>
            </Space>
        </SideMenuContainer>

    );
};

export default memo(connectCommand(AdminSignal));
