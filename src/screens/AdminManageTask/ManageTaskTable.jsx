import { Button, Space, Table, Tag, Typography } from 'antd';
import { ReactComponent as Edit } from 'assets/svgs/edit.svg';
import { ReactComponent as Eyes } from 'assets/svgs/eyes.svg';
import { ReactComponent as Garbage } from 'assets/svgs/garbage.svg';
import { connectCommand } from 'meta/reducer';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router-dom';

const { Text } = Typography;
const ManageTaskTable = () => {
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
        let color = '#F8EBE8';
        if (tag === 'lesson') {
          color = '#E9F6F1';
        }
        if (tag === 'newProject') {
          color = '#F8F0DE';
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
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (tag) => {
        let color = '#F8F0DE';
        if (tag === 0) {
          color = '#F4F6FD';
        }
        if (tag === 1) {
          color = '#E9F6F1';
        }
        return (
          <div className={'flex items-center justify-center'}>
            <Tag color={color} className={'tag-category'} key={tag}>
              <Text className="!text-xs">{tag ? 'Open' : 'Close'}</Text>
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
          <Button icon={<Edit fill="#3B3F45" />} />
          <Button icon={<Garbage fill="#3B3F45" />} />
          <Button icon={<Eyes fill="#3B3F45" />} />
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
      status: 0,
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
      status: 1,
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
      status: 0,
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
      status: 0,
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
      status: 1,
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
      status: 1,
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
      status: 0,
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
      status: 1,
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
      status: 1,
    },
    {
      key: '12',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'lesson',
      status: 0,
    },
    {
      key: '3',
      title: 'John Brown 12312312312321',
      author: 'John Brown 12312312312321',
      lastUpdate: 'New York No. 1 Lake Park',
      category: 'newProject',
      status: 1,
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

export default connectCommand(ManageTaskTable);
