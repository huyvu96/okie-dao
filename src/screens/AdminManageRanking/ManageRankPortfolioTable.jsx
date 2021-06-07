import { Avatar, Button, Space, Table, Typography } from 'antd';
import { ReactComponent as LockUser } from 'assets/svgs/lockUser.svg';
import { ReactComponent as Medal } from 'assets/svgs/medal.svg';
import FluctuationsValue from 'components/FluctuationsValue';
import { connectCommand } from 'meta/reducer';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { SCOPE } from './index';
const { Text } = Typography;

const ManageRankPortfolioTable = ({ scope }) => {
  const history = useHistory();

  const columns = [
    {
      title: 'No.',
      dataIndex: 'pos',
      key: 'pos',
      render: (text) => (
        <div className="flex flex-row items-center">
          <Text className="!text-sm mr-[17px]">{text}</Text>
          {text <= 3 && scope === SCOPE.Follow && <Medal className="mr-[20px] w-[26px]" />}
        </div>
      ),
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (text) => (
        <div className="flex flex-row items-center">
          <Avatar size={30} src={'https://i.pravatar.cc/20'} className="mr-[20px]" />
          <Text className="!text-sm">{text}</Text>
        </div>
      ),
    },
    {
      title: 'Profit',
      key: 'profit',
      dataIndex: 'profit',
      render: (text) => <FluctuationsValue {...{ value: text }} />,
    },
    {
      title: '24h',
      key: 'value',
      dataIndex: 'value',
      render: (text) => <FluctuationsValue {...{ value: text }} />,
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <Button icon={<LockUser fill="#3B3F45" />} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      pos: 1,
      user: 'John Brown',
      profit: 999,

      value: 0,
    },
    {
      key: '12',
      pos: 2,
      user: 'John Brown',
      profit: 999,

      value: 1,
    },
    {
      key: '3',
      pos: 3,
      user: 'John Brown',
      profit: 999,

      value: 0,
    },
    {
      key: '12',
      pos: 4,
      user: 'John Brown',
      profit: 999,

      value: 0,
    },
    {
      key: '3',
      pos: 5,
      user: 'John Brown',
      profit: 999,

      value: 1,
    },
    {
      key: '12',
      pos: 6,
      user: 'John Brown',
      profit: 999,

      value: 1,
    },
    {
      key: '3',
      pos: 7,
      user: 'John Brown',
      profit: 999,

      value: 0,
    },
    {
      key: '12',
      pos: 8,
      user: 'John Brown',
      profit: 999,

      value: 1,
    },
    {
      key: '3',
      pos: 9,
      user: 'John Brown',
      profit: 999,

      value: 1,
    },
    {
      key: '12',
      pos: 10,
      user: 'John Brown',
      profit: 999,

      value: 0,
    },
    {
      key: '3',
      pos: 11,
      user: 'John Brown',
      profit: 999,

      value: 1,
    },
  ];

  const onRow = (record, rowIndex) => {
    return {
      onClick: (event) => {
        history.push(`/admin/manage/task-detail/${record.key}`);
      }, // click row
    };
  };

  return (
    <div className="!w-full mt-[30px]">
      <Table columns={columns} dataSource={data} onRow={onRow} />
    </div>
  );
};

export default connectCommand(ManageRankPortfolioTable);
