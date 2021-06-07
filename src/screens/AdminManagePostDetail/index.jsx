import {connectCommand} from 'meta/reducer';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import './AdminPostDetails.scss';
import {Breadcrumb, Button, Space, Typography} from "antd";
import LayoutContainer from "components/LayoutContainer";
import {titleCase} from "utils/format";
import CardNews from "components/CardNews";
import PostSummaryDetails from "screens/AdminManagePostDetail/PostSummaryDetails";
import Chart from "screens/Profile/Chart";
import SectionContent from "components/SectionContent";
import {openModal} from "@doopage/use-modal";
import {ModalName} from "utils/constants";


const {Title, Text} = Typography;

const AdminPostDetails = ({}) => {
    const {t} = useTranslation();
    const openViewAll = (title) => {
        openModal(ModalName.viewAllUserModal, {
            data: {
                title
            },
        });
    }
    return (
        <LayoutContainer containerClass={'items-start'} contentClass={"!max-w-none"}>
            <div className="p-[30px]">
                <Breadcrumb className="admin-details-post antd-breadcrumb" separator=">">
                    <Breadcrumb.Item>Manage Post</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">{titleCase(window.location.pathname.split('/')[3])}</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className={'flex flex-row pt-[30px]'}>
                    <CardNews
                        imgSrc={'https://snipboard.io/YFXAJC.jpg'}
                        category={'ENHANCE'}
                        title={'Rumors of PayPal shaking hands with Avalanche '}
                        rating={4.5}
                    />
                    <Space direction={'vertical'} className={'flex pl-[30px] w-full'}>
                        <PostSummaryDetails/>
                        <SectionContent>
                            <Space className="flex flex-row w-full justify-between items-center">
                                <Title level={4}>{t(`User View`)}</Title>
                                <Space>
                                    <Button className={'btn btn-view dark:text-black'} onClick={() => openViewAll(t('User View'))}>
                                        {t(`User View`)}
                                    </Button>
                                    <Button className={'btn btn-like dark:text-black'} onClick={() => openViewAll(t('User Like'))}>
                                        {t(`User Like`)}
                                    </Button>

                                    <Button className={'btn btn-share dark:text-black'} onClick={() => openViewAll(t('User Share'))}>
                                        {t(`User Share`)}
                                    </Button>
                                </Space>
                            </Space>

                            <Chart type="line" width={'100%'} height={360}/>

                        </SectionContent>
                    </Space>

                </div>
            </div>
        </LayoutContainer>

    );
};

export default memo(connectCommand(AdminPostDetails));

