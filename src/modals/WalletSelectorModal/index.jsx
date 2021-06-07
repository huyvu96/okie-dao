import { closeModal, useModal } from '@doopage/use-modal';
import Wallet from '@project-serum/sol-wallet-adapter';
import { useQuery } from '@redux-requests/react';
import { clusterApiUrl } from '@solana/web3.js';
import { Button, Image, Modal, Space, Typography } from 'antd';
import { is } from 'cheerio/lib/api/attributes';
import { isEmpty } from 'lodash';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { loginByAddress } from 'store/apiAction';
import { updateCommon } from 'store/mutationAction';
import { useCommon } from 'store/selector';
import { ModalName, SupportedWalletMap } from 'utils/constants';
import './modal.scss';

function ModalContent(props) {
  const { t } = useTranslation();
  const network = clusterApiUrl('devnet');
  const [providerUrl] = useState('https://www.sollet.io');
  // const connection = useMemo(() => new Connection(network), [network]);
  const urlWallet = useMemo(() => new Wallet(providerUrl, network), [providerUrl, network]);
  const wallet = useCommon('wallet', {});

  //{wallet?.connected ? middleEllipsis(wallet.publicKey.toBase58()) : 'Connect'}
  const dispatch = useDispatch();

  const Disconnect = () => {
    wallet?.disconnect();
    closeModal(ModalName.walletSelectorModal);
  };

  if (wallet?.connected) {
    return (
      <Space direction="vertical" className={'flex items-center justify-center w-full'}>
        <Typography.Text className="text-[16px] !leading-[16px] font-semibold">
          {wallet?.publicKey.toBase58()}
        </Typography.Text>
        <Button className="w-[150px] !rounded-[15px]" onClick={Disconnect} type="primary">
          {t('Disconnect')}
        </Button>
      </Space>
    );
  }

  const items = Object.keys(SupportedWalletMap).map((key) => {
    const walletInfo = SupportedWalletMap[key];

    const onClick = () => {
      dispatch(updateCommon('wallet', urlWallet));
      closeModal(ModalName.walletSelectorModal);
    };

    return (
      <Button className="WalletBtn w-[297px] !rounded-[15px]" key={key} onClick={onClick}>
        <Space align="center" className="flex flex-row justify-between items-center">
          <Image height={25} width={25} src={walletInfo.logo} />
          <Typography.Text className="text-[16px]">{walletInfo.name}</Typography.Text>
        </Space>
      </Button>
    );
  });
  return <div className={'flex items-center justify-center '}>{items}</div>;
}

function WalletSelectorModal(props) {
  const { open } = useModal(ModalName.walletSelectorModal);
  const { t } = useTranslation();
  const wallet = useCommon('wallet', {});
  const dispatch = useDispatch();
  const result = useQuery({ type: loginByAddress });

  console.log(result)
  useEffect(() => {
    if (!isEmpty(wallet)) {
      wallet?.on('connect', () => {
        dispatch(updateCommon('connected', true));
        dispatch(loginByAddress({ address: wallet?.publicKey.toBase58() }));
      });
      wallet?.on('disconnect', () => {
        dispatch(updateCommon('wallet', undefined));
        dispatch(updateCommon('connected', false));
      });
      wallet?.connect();
      return () => {
        wallet?.disconnect();
      };
    };

  }, [wallet]);

  return (
    <Modal
      className="WalletSelector"
      title={wallet?.connected ? t('Your wallet') : t('Connect to a wallet')}
      visible={open}
      width={wallet?.connected ? 500 : 400}
      footer={null}
      onCancel={() => closeModal(ModalName.walletSelectorModal)}>
      <ModalContent {...props} />
    </Modal>
  );
}

export default memo(WalletSelectorModal);
