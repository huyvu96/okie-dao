import { openModal } from '@doopage/use-modal';
import { Button, Space, Typography } from 'antd';
import Back from 'assets/svgr/Back';
import { ReactComponent as UserIcon } from 'assets/svgs/profile.svg';
import LayoutContainer from 'components/LayoutContainer';
import SectionContent from 'components/SectionContent';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import { useMount } from 'react-use';
import MyWallet from 'screens/Profile/MyWallet';
import MyWalletSummary from 'screens/Profile/MyWalletSummary';
import { ModalName } from 'utils/constants';
import ChartContainer from './ChartContainer';
import PortTable from './PortTable';
import './Profile.scss';
import SuggestTask from './SuggestTask';

const { Title, Text } = Typography;
const Profile = (props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { id: profileId } = useParams();
  // const { state } = useLocation();
  const {
    // runCommand,
    // fetchCommand,
    core,
  } = props;
  const viewOnly = !!profileId;
  console.log({ core, profileId });
  useMount(() => {});

  return (
    <LayoutContainer>
      <div className="p-[30px] flex flex-row justify-between items-center">
        <div>
          <Title level={2}>Welcome, Neiwa Jacob</Title>
          <Text>neiwajacob@gmail.com/09083939201</Text>
        </div>
        {viewOnly ? (
          <Button onClick={() => {}} className="submit-content-btn">
            <Space>
              <UserIcon />
              {t(`Follow`)}
            </Space>
          </Button>
        ) : (
          <Space>
            <Button
              onClick={() => history.push('/profile/submit-content')}
              className="submit-content-btn">
              <Space>
                <Back />
                {t(`Submit Content`)}
              </Space>
            </Button>
            <Button
              onClick={() => {
                openModal(ModalName.editProfileModal, {
                  data: {
                    title: 'this is title',
                    description: 'blalalaalal',
                  },
                });
              }}
              className="submit-content-btn">
              <Space>
                <UserIcon />
                {t(`Edit profile`)}
              </Space>
            </Button>
            <Button
              onClick={() => {
                openModal(ModalName.historyTransactionModal);
              }}
              className="submit-content-btn">
              <Space>
                <UserIcon />
                {t(`History Transaction`)}
              </Space>
            </Button>
          </Space>
        )}
      </div>
      {/*  */}
      <div className="px-[30px]">
        {viewOnly ? (
          <>
            <MyWalletSummary {...{ viewOnly }} />
            <div className="flex flex-row my-[30px]">
              <div className="flex-1 mr-[30px]">
                <SectionContent>
                  <PortTable {...{ viewOnly }} />
                </SectionContent>
              </div>
              <ChartContainer {...{ viewOnly }} />
            </div>
          </>
        ) : (
          <div className="flex flex-row">
            <div className="flex flex-col w-full flex-1">
              <MyWallet {...{ viewOnly }} />
            </div>
            {/*  */}

            <div className=" hidden lg:flex flex-col ml-[30px]">
              <SuggestTask />
              <ChartContainer {...{ viewOnly }} />
            </div>
          </div>
        )}
      </div>
    </LayoutContainer>
  );
};

export default memo(connectCommand(Profile));
