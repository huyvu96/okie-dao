import { openModal } from '@doopage/use-modal';
import { useQuery } from '@redux-requests/react';
import { Button, Space } from 'antd';
import CardEvent from 'components/CardEvent';
import CardNews from 'components/CardNews';
import CardSignal from 'components/CardSignal';
import LayoutContainer from 'components/LayoutContainer';
import ListCards from 'components/ListCards';
import RankingBoard from 'components/RakingBoard';
import RakingItem from 'components/RakingItem';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUsers } from 'store/apiAction';
import { updateCommon } from 'store/mutationAction';
import { useCommon } from 'store/selector';
import { supportList } from 'translations';
import { ModalName } from 'utils/constants';
import { ReactComponent as Back } from '../assets/svgs/back.svg';
import { ReactComponent as Profile } from '../assets/svgs/profile.svg';

const Sample = (props) => {
  let history = useHistory();
  const { data: users, loading, error } = useQuery({ type: getUsers });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counter = useCommon('counter', 0);

  return (
    <LayoutContainer>
      <Space size={10} direction={'vertical'} className="flex items-center w-full">
        <div>Sample Screen</div>
        <Button
          type="primary"
          shape="round"
          onClick={() => {
            history.goBack();
          }}>
          Go Back
        </Button>
        <Button
          type="primary"
          shape="round"
          onClick={() => {
            const l = supportList[Math.floor(Math.random() * (supportList.length - 1))];
            i18next.changeLanguage(l.fallback);
          }}>
          {t(`Change Language`)}
        </Button>
        <Button
          type="dashed"
          shape="round"
          onClick={() => dispatch(updateCommon('counter', (value) => value + 2))}>
          <Trans
            i18nKey="Add <bold>Counter</bold> {{counter}}"
            values={{ counter }}
            components={{ bold: <label className="text-bold" /> }}
          />
        </Button>
        <Button
          type="primary"
          shape="round"
          className="mt-2"
          onClick={() =>
            openModal(ModalName.modalSimple, {
              data: {
                title: 'this is title',
                description: 'blalalaalal',
              },
            })
          }>
          <Trans i18nKey="Open modal" />
        </Button>
        <Button onClick={() => {}} className="btn-transparent">
          {t(`See Drafts`)}
        </Button>
        {/*  */}
        <div>Total Users: {users?.length}</div>
        <Button type="primary" shape="round" loading={loading} onClick={() => dispatch(getUsers())}>
          Fetch Users
        </Button>
        {users?.map((i) => {
          return (
            <div key={i.id}>
              {i.id}- {i.name}
            </div>
          );
        })}
        {error}
        <Button type="primary" ghost>
          <Space>
            <Profile /> Edit profile
          </Space>
        </Button>

        <Button type="primary" ghost>
          <Space>
            <Back /> Submit content
          </Space>
        </Button>

        <Space direction="vertical">
          <ListCards
            title={'Hot news'}
            data={[1, 2, 3, 4]}
            renderItem={() => (
              <CardNews
                imgSrc={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
                category={'ENHANCE'}
                title={'Rumors of PayPal shaking hands with Avalanche '}
                rating={4.5}
              />
            )}
          />

          <CardEvent
            title={'Should Bitcoin traders be worried about lower highs'}
            imgSrc={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
            host={'WREN DWIGHT'}
            address={'123 Nguyen Dinh Chieu, Ward 1, Dist.3, HCMC'}
            date={'Apr 29'}
            participants={2000}
          />
          <CardSignal
            imgSrc={'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}
            name={'Bitcoin'}
            entry={`$237 - 260`}
            target={`$365 - 466 - 635`}
            stl={'$200'}
          />
        </Space>
      </Space>
      <RakingItem />
      <RankingBoard />
    </LayoutContainer>
  );
};

Sample.propTypes = {
  exProps: PropTypes.bool,
};

export default memo(Sample);
