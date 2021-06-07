import { Avatar, Dropdown, Menu, Space, Typography } from 'antd';
import { ReactComponent as TriangleDown } from 'assets/svgs/triangleDown.svg';
import { ReactComponent as TriangleUp } from 'assets/svgs/triangleUp.svg';
import RakingItem from 'components/RakingItem';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CrownImage from '../../assets/pngs/crown.png';
import { ReactComponent as ArrowDown } from '../../assets/svgs/arrowDown.svg';
import './RakingBoard.scss';

const { Text, Title } = Typography;

const RankingBoard = React.memo(({ imgSrc, children, gradientShadow, ...rest }) => {
  const { t } = useTranslation();
  const menu = (
    <Menu style={{ width: '100%', marginTop: 0 }}>
      <Menu.Item key="1" onClick={() => {}}>
        {t(`Top Follow`)}
      </Menu.Item>
      <Menu.Item key="2" onClick={() => {}}>
        {t(`Top Point`)}
      </Menu.Item>
      <Menu.Item key="3" onClick={() => {}}>
        {t(`Top Token`)}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="board dark:bg-[#161C27] border min-w-[260px] md:w-[260px]">
      <Text className={'text-[16px] font-bold mb-[30px]'}>{t('Top Ranking')}</Text>
      <Dropdown overlay={menu} placement={'bottomCenter'} arrow>
        <div className="select-btn dark:bg-[#2F3746] bg-white">
          <Text className={'font-bold'}>{'Top Follow'}</Text>
          <ArrowDown />
        </div>
      </Dropdown>
      <div className="flex flex-col justify-center items-center w-full">
        <div className={'flex flex-col mb-12 relative h-[250px] w-[260px]'}>
          <div className={'flex flex-col items-center mt-20 z-0 absolute bottom-0 left-[20px]'}>
            <div className="flex flex-col items-center justify-center w-[20px] mb-3">
              <Text type="default">{2}</Text>
              <TriangleUp />
            </div>
            <Avatar size={80} src={'https://i.pravatar.cc/310'} />
            <Text className="name text-center max-w-[100px] mt-9 ml-0">{'@abcEF'}</Text>
            <span className="score text-center primary-color max-w-[50px] mt-2">
              {Math.floor(Math.random() * 7500)}
            </span>
          </div>
          <div className={'flex flex-col items-center z-10'}>
            <img alt="img" src={CrownImage} />
            <Avatar size={120} src={'https://i.pravatar.cc/309'} />
            <Text className="name text-center max-w-[100px] mt-9 ml-0">{'@abcEF'}</Text>
            <span className="score text-center primary-color max-w-[50px] mt-2">
              {Math.floor(Math.random() * 8000)}
            </span>
          </div>
          <div className={'flex flex-col z-0 items-center mt-20 absolute bottom-0 right-[20px]'}>
            <div className="flex flex-col items-center justify-center w-[20px] mb-3">
              <Text type="default">{3}</Text>
              <TriangleDown />
            </div>
            <Avatar size={80} src={'https://i.pravatar.cc/308'} />
            <Text className="name text-center max-w-[100px] mt-9 ml-0">{'@abcEF'}</Text>
            <span className="score text-center primary-color max-w-[50px] mt-2">
              {Math.floor(Math.random() * 7000)}
            </span>
          </div>
        </div>
        <Space direction={'vertical'} size={20}>
          <RakingItem position={4} name={'123123123bmnbmnb'} avatar={'https://i.pravatar.cc/301'} />
          <RakingItem position={5} isUp avatar={'https://i.pravatar.cc/302'} />
          <RakingItem position={6} avatar={'https://i.pravatar.cc/303'} />
          <RakingItem position={7} isUp avatar={'https://i.pravatar.cc/304'} />
          <RakingItem position={8} isUp avatar={'https://i.pravatar.cc/305'} />
          <RakingItem position={9} avatar={'https://i.pravatar.cc/306'} />
          <RakingItem position={10} avatar={'https://i.pravatar.cc/307'} />
        </Space>
      </div>
    </div>
  );
});

export default RankingBoard;
