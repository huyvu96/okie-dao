import { openModal } from '@doopage/use-modal';
import { Button, Input, Space, Typography } from 'antd';
import PlusSquare from 'assets/svgr/PlusSquare';
import Search from 'assets/svgr/Search';
import SectionContent from 'components/SectionContent';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ModalName } from 'utils/constants';
import MyWalletSummary from './MyWalletSummary';
import PortTable from './PortTable';
const { Title } = Typography;
const MyWallet = ({ viewOnly }) => {
  const { t } = useTranslation();

  return (
    <div className="!w-full">
      <MyWalletSummary {...{ viewOnly }} />
      {/*  */}
      <div className="mt-[30px]">
        <SectionContent>
          {viewOnly ? null : (
            <>
              <div className="flex flex-row w-full justify-between">
                <Title level={4}>{t(`My Wallet`)}</Title>
                <Button
                  onClick={() => {
                    openModal(ModalName.addCoinTokenModal, { data: {} });
                  }}
                  className="submit-content-btn">
                  <Space>
                    <PlusSquare />
                    {t(`Add Coin / Token`)}
                  </Space>
                </Button>
              </div>
              <Input
                className={viewOnly ? `` : `mt-[20px]`}
                placeholder={t(`Search coins`)}
                prefix={<Search />}
                type="search"
              />
            </>
          )}
          <PortTable {...{ viewOnly }} />
        </SectionContent>
      </div>
    </div>
  );
};

export default MyWallet;
