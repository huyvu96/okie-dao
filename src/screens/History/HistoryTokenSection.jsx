import {Badge, Button, Card, Input, Space, Typography} from "antd";
import Search from "assets/svgr/Search";
import HistoryTokenTable from "screens/History/HistoryToken";
import React from "react";
import {useTranslation} from "react-i18next";
const {Title, Text} = Typography;


const HistoryTokenSection = (props) => {
    const {t} = useTranslation();

    return (
        <Card className={' px-[15px] py-[15px]'}>
            <div className="flex flex-row w-full justify-between items-center">
                <Space size={1}>
                    <Title level={4}>{t(`History Token`)}</Title>
                    <Badge overflowCount={999} count={12321} className={'badge'}/>
                </Space>
                <Space>
                    <Input
                        className="w-[340px] h-[42px]"
                        placeholder={t(`Search`)}
                        prefix={<Search/>}
                        type="search"
                    />
                    <Button className={'btn-light-rose ant-btn-focus'}>
                        {t(`Ref Id`)}
                        <Text className={'!text-primary ml-0.5 '}>16</Text>
                    </Button>
                    <Button className={'btn-light-green ant-btn-focus'}>
                        {t(`Task`)}
                        <Text className={'!text-primary ml-0.5 '}>16</Text>
                    </Button>
                    <Button className={'btn-light-yellow ant-btn-focus'}>
                        {t(`View`)}
                        <Text className={'!text-primary ml-0.5 '}>16</Text>
                    </Button>
                    <Button className={'btn-light-blue ant-btn-focus'}>
                        {t(`Content`)}
                        <Text className={'!text-primary ml-0.5 '}>16</Text>
                    </Button>
                    <Button className={'btn-light-purple ant-btn-focus'}>
                        {t(`View All`)}
                    </Button>
                </Space>

            </div>
            <HistoryTokenTable/>
        </Card>
    )
}
export default HistoryTokenSection;