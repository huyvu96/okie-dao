import React from 'react';
import { Card, Col, Row, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { titleCase } from 'utils/format';
import './EventDetail.scss';
import { useHistory } from 'react-router-dom';

const { Text, Link } = Typography;

const mockupTasks = [
  {
    name: 'How did you know about OKieDao?',
    point: 50,
    status: 'done',
  },
  {
    name: 'How did you know about OKieDao?',
    point: 50,
    status: 'inprogress',
  },
  {
    name: 'How did you know about OKieDao?',
    point: 50,
    status: 'done',
  },
  {
    name: 'How did you know about OKieDao?',
    point: 50,
    status: 'inprogress',
  },
  {
    name: 'How did you know about OKieDao?',
    point: 50,
    status: 'done',
  },
  {
    name: 'How did you know about OKieDao?',
    point: 50,
    status: 'inprogress',
  },
  {
    name: 'How did you know about OKieDao?',
    point: 50,
    status: 'done',
  },
  {
    name: 'How did you know about OKieDao?',
    point: 50,
    status: 'inprogress',
  },
];

const statusColors = {
  done: '#F8F0DE',
  inprogress: '#F5FCF9',
};

const CardTasks = React.memo(({ tasks }) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Card title={t(`Task`)} className="card-task">
      <Space direction="vertical" size={20} className="w-full h-full overflow-auto">
        {mockupTasks.map((task) => {
          const { name, point, status } = task;
          return (
            <Row className="flex flex-row items-center font-semibold justify-between">
              <Col xs={10}>
                <Link
                  className="w-[133px] !text-[#3B3F45]"
                  onClick={() => history.push('/mission/1')}>
                  {name}
                </Link>
              </Col>
              <Col xs={7} className="flex justify-center">
                <Text className="!text-primary  ">{point + ' ' + t(`point`)}</Text>
              </Col>
              <Col xs={7} className="flex justify-center">
                <div
                  className="rounded-[12px] py-[8px] px-[12px]"
                  style={{ backgroundColor: statusColors[status] }}>
                  <Text>{titleCase(status)}</Text>
                </div>
              </Col>
            </Row>
          );
        })}
      </Space>
    </Card>
  );
});

export default CardTasks;
