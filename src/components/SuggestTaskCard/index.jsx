import { Progress, Space, Typography } from 'antd';
import Star from 'assets/svgr/Star';
import TickSquare from 'assets/svgr/TickSquare';
const { Text } = Typography;
const SuggestTaskCard = ({ progress }) => {
  return (
    <Space size={15}>
      <div className="!w-[108px] !h-full rounded-[8px] overflow-hidden">
        <img alt="img" className="!w-full !h-full " src="https://picsum.photos/108/68" />
      </div>
      <Space direction="vertical">
        <Text className="!font-bold">Vestibulum est, lectus est in varius imperdiet diam.</Text>
        {progress ? (
          <Progress percent={progress} size="small" strokeColor={'#41CA8B'} />
        ) : (
          <div className="flex flex-row justify-between">
            <Space>
              <TickSquare fill="#3B3F45" />
              <Text className="!text-primary ">joined</Text>
            </Space>
            <Space>
              <Star />
              <Text>50 point</Text>
            </Space>
          </div>
        )}
      </Space>
    </Space>
  );
};

export default SuggestTaskCard;
