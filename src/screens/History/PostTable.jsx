import {Tag, Typography, Table, Space, Button} from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './History.scss';
import {ReactComponent as TickSquare} from "assets/svgs/tickSquare.svg";
import {ReactComponent as XSquare} from "assets/svgs/xSquare.svg";
import {useTranslation} from "react-i18next";
import TbText from "components/TableText";
import moment from "moment";
import {connectCommand} from "meta/reducer";
import {titleCase} from "utils/format";


const { Text } = Typography;
const PostTable = () => {
    const history = useHistory();
    const {t} = useTranslation();

    const columns = [
        {
            title:<TbText className={'justify-start'} text={t(`Title`)}/>,
            dataIndex: 'title',
            key: 'title',
            render: (text) => <TbText className={'justify-start'} text={t(text)}/>,
        },
        {
            title:<TbText text={t(`Like`)}/>,
            dataIndex: 'like',
            key: 'like',
            width: 100,
            render: (text) => <TbText  text={t(text)}/>,
        },
        {
            title:<TbText text={t(`Share`)}/>,
            dataIndex: 'share',
            key: 'share',
            width: 100,
            render: (text) => <TbText  text={t(text)}/>,
        },
        {
            title:<TbText text={t(`View`)}/>,
            dataIndex: 'view',
            key: 'view',
            width: 100,
            render: (text) => <TbText  text={t(text)}/>,
        },
        {
            title:<TbText text={t(`Category`)}/>,
            dataIndex: 'category',
            key: 'category',
            width: 150,
            render: (text) => <TbText  text={t(text)}/>,
        },

        {
            title:<TbText text={t(`Status`)}/>,
            key: 'status',
            dataIndex: 'status',
            width: 150,
            render: (tag) => {
                let color = '#F8F0DE';
                if (tag === 'draft') {
                    color = '#F4F6FD';
                }
                if (tag === 'published') {
                    color = '#FFFBF1';
                }
                if (tag === 'waiting') {
                    color = '#F5FCF9';
                }
                return (
                    <div className={'flex justify-center'}>
                        <Tag color={color} className={'tag-category'} key={tag}>
                            <Text className="!text-xs !font-semibold">{titleCase(tag)}</Text>
                        </Tag>
                    </div>
                );
            },
        },
        {
            title:<TbText className={'justify-start'} text={t(`Last update`)}/>,
            dataIndex: 'lastUpdate',
            key: 'lastUpdate',
            render: (date) => {
                const d = moment().format('lll');
                return <Text className={'!text-sm'}>{d}</Text>;
            },
        },
        {
            title:<TbText text={t(`Action`)}/>,
            key: 'action',
            render: (text, record) => (
                <Space className={'flex justify-center'}>
                    <Button icon={<TickSquare fill="#3B3F45" />} />
                    <Button icon={<XSquare />} />
                </Space>
            ),
        },
    ];
    const data = [
        {
            title: 'John Brown ',
            like: '100',
            share: '200',
            view: '300',
            category: 'Lesson',
            status: 'draft',
            lastUpdate: 'event',
        },
        {
            title: 'John Brown ',
            like: '100',
            share: '200',
            view: '300',
            category: 'Lesson',
            status: 'published',
            lastUpdate: 'event',
        },
        {
            title: 'John Brown ',
            like: '100',
            share: '200',
            view: '300',
            category: 'Lesson',
            status: 'waiting',
            lastUpdate: 'event',
        },

    ];

    const onRow = (record, rowIndex) => {
        return {
            onClick: (event) => {
              //  history.push(`/admin/manage/post-detail/${record.key}`);
            }, // click row
        };
    };
    return (
        <div className="!w-full mt-[30px]">
            <Table scroll={{y:260 }} pagination={false} columns={columns} dataSource={data} onRow={onRow} />
        </div>
    );
};

export default connectCommand(PostTable);
