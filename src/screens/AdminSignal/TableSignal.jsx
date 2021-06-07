import {Button, Space, Table, Tag, Typography} from 'antd';
import {connectCommand} from 'meta/reducer';
import moment from "moment";
import {ReactComponent as Edit} from "assets/svgs/edit.svg";
import {ReactComponent as Eyes} from "assets/svgs/eyes.svg";
import {ReactComponent as Garbage} from "assets/svgs/garbage.svg";

import React from "react";

const {Text} = Typography;
const TableSignal = () => {
    const columns = [
        {
            title: 'Background',
            dataIndex: 'background',
            align:'center',
            key: 'background',
            render: src => <img alt="img" src={src} className="h-[70px] w-[103px] rounded-[12px]" />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            align:'center',
            key: 'name',
            render: text => <Text className="!text-sm">{text}</Text>,
        },
        {
            title: 'Link Coin',
            dataIndex: 'link',
            align:'center',
            key: 'link',
            render: text => <Text className="!text-sm w-[186px]" ellipsis={true}>{text}</Text>,
        },
        {
            title: 'Entry',
            dataIndex: 'entry',
            align:'center',
            key: 'entry',
            render: text => <Text className="!text-sm !text-[#FF6969]" ellipsis>{text}</Text>,
        },
        {
            title: 'Target',
            dataIndex: 'target',
            align:'center',
            key: 'target',
            render: text => <Text className="!text-sm !text-[#2BC9BB]" ellipsis>{text}</Text>,
        },
        {
            title: 'STL',
            dataIndex: 'stoploss',
            align:'center',
            key: 'stoploss',
            render: text => <Text className="!text-sm" ellipsis>{text}</Text>,
        },
        {
            title: 'Status',
            align:'center',
            key: 'status',
            dataIndex: 'status',
            render: tag => {
                let color = '#F8F0DE'
                if (tag === 'Online') {
                    color = '#F8EBE8';
                }
                if (tag === 'Done') {
                    color = '#E9F6F1';
                }
                return (
                    <div className={'flex items-center justify-center'}>
                        <Tag color={color} className={'tag-category'} key={tag}>
                            <Text className="!text-xs">{tag}</Text>
                        </Tag>
                    </div>
                );
            },
        },
        {
            title: 'Last update',
            align:'center',
            dataIndex: 'lastUpdate',
            key: 'lastUpdate',
            render: date => {
                return (
                    <Text className={'!text-sm'} ellipsis>{date}</Text>
                )
            }
        },

        {
            title: 'Action',
            key: 'action',
            align:'center',
            render: (text, record) => (
                <Space>
                    <Button icon={<Edit/>}/>
                    <Button icon={<Garbage/>}/>
                    <Button icon={<Eyes/>}/>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            background: 'https://snipboard.io/w6Raol.jpg',
            name: 'Bitcoin',
            link: 'https://www.binance.com/vi/trade/NEAR_USDT?type=spot',
            entry: '$237 - 260',
            target: '$365 - 446 - 635',
            stoploss: '$200',
            status: 'Done',
            lastUpdate: moment().format('lll'),
        },
        {
            key: '2',
            background: 'https://snipboard.io/w6Raol.jpg',
            name: 'Bitcoin',
            link: 'https://www.binance.com/vi/trade/NEAR_USDT?type=spot',
            entry: '$237 - 260',
            target: '$365 - 446 - 635',
            stoploss: '$200',
            status: 'Online',
            lastUpdate: moment().format('lll'),
        },
        {
            key: '3',
            background: 'https://snipboard.io/w6Raol.jpg',
            name: 'Bitcoin',
            link: 'https://www.binance.com/vi/trade/NEAR_USDT?type=spot',
            entry: '$237 - 260',
            target: '$365 - 446 - 635',
            stoploss: '$200',
            status: 'Done',
            lastUpdate: moment().format('lll'),
        },
        {
            key: '4',
            background: 'https://snipboard.io/w6Raol.jpg',
            name: 'Bitcoin',
            link: 'https://www.binance.com/vi/trade/NEAR_USDT?type=spot',
            entry: '$237 - 260',
            target: '$365 - 446 - 635',
            stoploss: '$200',
            status: 'Done',
            lastUpdate: moment().format('lll'),
        },
        {
            key: '5',
            background: 'https://snipboard.io/w6Raol.jpg',
            name: 'Bitcoin',
            link: 'https://www.binance.com/vi/trade/NEAR_USDT?type=spot',
            entry: '$237 - 260',
            target: '$365 - 446 - 635',
            stoploss: '$200',
            status: 'Online',
            lastUpdate: moment().format('lll'),
        },
    ];


    return (
        <div className="!w-full mt-[30px]">
            <Table pagination={{ position: ['none', 'none'] }} columns={columns} dataSource={data}/>
        </div>
    );
};

export default connectCommand(TableSignal);
