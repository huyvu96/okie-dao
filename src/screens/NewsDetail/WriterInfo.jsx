import React from 'react';
import { Avatar, Typography } from 'antd';

const { Text } = Typography;

const WriterInfo = React.memo(() => {
  return (
    <div className="flex flex-row items-center">
      <Avatar size={44} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <div className="flex flex-col ml-[10px]">
        <Text className="flex flex-row">
          <div className="font-semibold">Neiwa Jabob</div>&nbsp;
          <div className="primary-color">posted a news event</div>
        </Text>

        <Text type="secondary" className="text-[12px] leading-[12px]">
          12 September at 09:21am
        </Text>
      </div>
    </div>
  );
});

export default WriterInfo;
