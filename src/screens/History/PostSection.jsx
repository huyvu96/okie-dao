import {Badge, Button, Card, Input, Space, Typography} from "antd";
import Search from "assets/svgr/Search";
import PostTable from "screens/History/PostTable";
import React from "react";
import {useTranslation} from "react-i18next";
const {Title, Text} = Typography;

const PostSection = (props) => {
    const {t} = useTranslation();

    return (
        <Card className={'px-[15px] py-[15px]'}>
            <div className="flex flex-row w-full justify-between items-center">
                <Space size={1}>
                    <Title level={4}>{t(`Post`)}</Title>
                    <Badge overflowCount={999} count={12321} className={'badge'}/>
                </Space>
                <Space>
                    <Input
                        className="w-[340px] h-[42px]"
                        placeholder={t(`Search`)}
                        prefix={<Search/>}
                        type="search"
                    />
                    <Button className={'btn-light-yellow'}>
                        {t(`Published`)}
                        <Text className={'!text-primary ml-0.5 '}>16</Text>
                    </Button>
                    <Button className={'btn-light-green'}>
                        {t(`Waiting`)}
                        <Text className={'!text-primary ml-0.5 '}>16</Text>
                    </Button>
                    <Button className={'btn-light-blue'}>
                        {t(`Draft`)}
                        <Text className={'!text-primary ml-0.5 '}>16</Text>
                    </Button>
                    <Button className={'btn-light-purple'}>
                        {t(`View All`)}
                    </Button>

                </Space>

            </div>
            <PostTable/>
        </Card>
    )
}
export default PostSection;