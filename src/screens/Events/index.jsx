import { Button, Space } from 'antd';
import CardEvent from 'components/CardEvent';
import LayoutContainer from 'components/LayoutContainer';
import { connectCommand } from 'meta/reducer';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useScrollTop } from 'utils/hook';

const Events = (props) => {
  useScrollTop();
  const history = useHistory();
  const { t } = useTranslation();
  const data = Array(30)
    .fill(0)
    .map((_, index) => index);

  return (
    <LayoutContainer>
      <Space className="mt-[30px]">
        <Button onClick={() => history.push('/events/')}>{t(`View All`)}</Button>
        <Button
          onClick={() => history.push('/events?type=lesson')}
          className="!bg-pink-100 !text-black">
          {t(`Lesson`)}
        </Button>
        <Button
          onClick={() => history.push('/events?type=new-project')}
          className="!bg-green-100 !text-black">
          {t(`New Project`)}
        </Button>
        <Button
          onClick={() => history.push('/events?type=event')}
          className="!bg-yellow-100 !text-black">
          {t(`Event`)}
        </Button>
      </Space>
      <Space
        className="mt-[20px] uppercase text-[#BEC2C8]"
        split={<div className="h-[12px] w-[1px] bg-[#D8DEEB] mx-[20px]" />}>
        <div onClick={() => history.push('/events/')} className="text-primary cursor-pointer">
          {t(`Enhance`)}
        </div>
        <div onClick={() => history.push('/events?type=lesson')} className="cursor-pointer">
          {t(`Crypto  News`)}
        </div>
        <div onClick={() => history.push('/events?type=new-project')} className="cursor-pointer">
          {t(`Drk`)}
        </div>
      </Space>
      <div className="flex px-2 py-3 flex-wrap min-h-[85vh] -ml-3 -mr-3">
        {data?.map((item, index) => (
          <div key={index} className="p-3">
            <CardEvent
              badge={<div className="bg-pink-100 py-1 px-2">Lesson</div>}
              title={'Should Bitcoin traders be worried about lower highs'}
              imgSrc={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
              host={'WREN DWIGHT'}
              address={'123 Nguyen Dinh Chieu, Ward 1, Dist.3, HCMC'}
              date={'Apr 29'}
              participants={2000}
            />
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
};

Events.propTypes = {
  exProps: PropTypes.bool,
};

export default memo(connectCommand(Events));
