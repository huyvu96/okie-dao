import { Button, Space, Table, Tag, Typography } from 'antd';
import { connectCommand } from 'meta/reducer';
import moment from 'moment';
import { ReactComponent as TickSquare } from 'assets/svgs/tickSquare.svg';
import { ReactComponent as XSquare } from 'assets/svgs/xSquare.svg';
import React from 'react';
import { useHistory } from 'react-router-dom';

const { Text } = Typography;
const ManagePostTable = () => {
  const history = useHistory();

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <Text className="!text-sm">{text}</Text>,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      render: (text) => <Text className="!text-sm">{text}</Text>,
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
      render: (tag) => {
        let color = '#F8F0DE';
        if (tag === 'lesson') {
          color = '#F8EBE8';
        }
        if (tag === 'newProject') {
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
      dataIndex: 'lastUpdate',
      key: 'lastUpdate',
      render: (date) => {
        const d = moment().format('lll');
        return <Text className={'!text-sm'}>{d}</Text>;
      },
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <Button icon={<TickSquare fill="#3B3F45" />} />
          <Button icon={<XSquare />} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'event',
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
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
      <Table columns={columns} dataSource={data} onRow={onRow} />
    </div>
  );
};

export default connectCommand(ManagePostTable);
