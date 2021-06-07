import {Tag, Typography , Table} from 'antd';
import { connectCommand } from 'meta/reducer';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './History.scss';
import {useTranslation} from "react-i18next";
import TbText from "components/TableText";
import {titleCase} from "utils/format";


const { Text } = Typography;
const HistoryTokenTable = () => {
    const history = useHistory();
    const {t} = useTranslation();

    const columns = [
        {
            title:<TbText className={'justify-start'} text={t(`Name`)}/>,
            dataIndex: 'name',
            key: 'name',
            render: (text) => <TbText className={'justify-start'}  text={t(text)}/>,
        },

        {
            title:<TbText text={t(`Type`)}/>,
            key: 'type',
            dataIndex: 'type',
            render: (tag) => {
                let color = '#F8F0DE';
                if (tag === 'task') {
                    color = '#F5FCF9';
                }
                if (tag === 'view') {
                    color = '#FFFBF1';
                }
                if (tag === 'content') {
                    color = '#F4F6FD';
                }
                if (tag === 'view') {
                    color = '#FFFBF1';
                }
                if (tag === 'refID') {
                    color = '#FFF6F4';
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
            title:<TbText text={t(`Date`)}/>,
            dataIndex: 'date',
            key: 'date',
            render: (date) => {
                const d = moment().format('lll');
                return  <TbText classNameText={'!font-normal'} text={d}/>
            },
        },

        {
            title:<TbText text={t(`Token`)}/>,
            dataIndex: 'token',
            key: 'token',
            render: (text) => <TbText text={t(text)}/>,
        },

    ];
    const data = [
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'task',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'view',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'content',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'view',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'refID',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'content',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'content',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'content',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'view',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'task',
        },
        {
            name: 'John Brown ',
            token: '100',
            lastUpdate: 'New York No. 1 Lake Park',
            type: 'refID',
        },
    ];

    const onRow = (record, rowIndex) => {
        return {
            onClick: (event) => {
                history.push(`/admin/manage/post-detail/${record.key}`);
            }, // click row
        };
    };
    return (
        <div className="!w-full mt-[30px]">
          <Table scroll={{y:260 }} pagination={false} columns={columns} dataSource={data} onRow={onRow} />
        </div>
    );
};

export default connectCommand(HistoryTokenTable);
