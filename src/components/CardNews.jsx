import { Avatar, Divider, Space, Typography } from 'antd';
import CardImage from 'components/CardImage';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Clock } from '../assets/svgs/clock.svg';
import { ReactComponent as Star } from '../assets/svgs/star.svg';

const { Text } = Typography;

const CardNews = React.memo(({ imgSrc, category, title, viewers, rating, readTime, id }) => {
  const history = useHistory();
  return (
    <CardImage imgSrc={imgSrc} onClick={() => history.push('/news/1')}>
      <div className="flex flex-col">
        <Text type="secondary" className="mb-[10px] text-[12px] leading-[12px]">
          {category}
        </Text>
        <Text className="text-[16px] font-semibold leading-[16px] mb-[10px]">{title}</Text>
        <Avatar.Group
          maxCount={4}
          maxStyle={{ color: '#FFFFFF', backgroundColor: '#C1C7D0' }}
          className="mb-[10px]">
          {/*{*/}
          {/*    viewers?.map(viewer =>  <Avatar src={viewer?.avatar} />)*/}
          {/*}*/}
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Avatar.Group>
        <Space>
          <Space>
            <Star />
            <Text type="secondary">{rating}/5.0</Text>
          </Space>
          <Divider type="vertical" />
          <Space>
            <Clock />
            <Text type="secondary">1h40m</Text>
          </Space>
        </Space>
      </div>
    </CardImage>
  );
});

export default CardNews;
