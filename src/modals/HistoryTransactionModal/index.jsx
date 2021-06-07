import { closeModal, openModal, useModal } from '@doopage/use-modal';
import { Button, Form, Input, List, Modal, Typography } from 'antd';
import BNB from 'assets/svgr/coin/BNB';
import BTC from 'assets/svgr/coin/BTC';
import ETH from 'assets/svgr/coin/ETH';
import PIVX from 'assets/svgr/coin/PIVX';
import USDT from 'assets/svgr/coin/USDT';
import Search from 'assets/svgr/Search';
import { ReactComponent as TransactionBuy } from 'assets/svgs/transactionBuy.svg';
import { ReactComponent as TransactionSell } from 'assets/svgs/transactionSell.svg';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalName } from 'utils/constants';
const { Text } = Typography;
const modalName = ModalName.historyTransactionModal;

const EditProfileModal = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { open, data } = useModal(modalName);

  const handleOk = () => {
    closeModal(modalName);
  };

  const handleCancel = () => {
    closeModal(modalName);
  };
  const coins = [
    {
      key: '1',
      name: 'Bitcoin',
      shortName: 'BTC',

      img: <BTC />,
    },
    {
      key: '2',
      name: 'Ethereum',
      shortName: 'ETH',

      img: <ETH />,
    },
    {
      key: '3',
      name: 'Tether',
      shortName: 'USDT',

      img: <USDT />,
    },
    {
      key: '4',
      name: 'Binance Coin',
      shortName: 'BNB',

      img: <BNB />,
    },
    {
      key: '5',
      name: 'PIVX',
      shortName: 'PIVX',

      img: <PIVX />,
    },
  ];

  return (
    <Modal
      title={t(`History Transaction`)}
      visible={open}
      onCancel={handleCancel}
      className="w-[500px]"
      destroyOnClose
      footer={null}>
      {/*  */}
      <Input className="" placeholder={t(`Search coins`)} prefix={<Search />} type="search" />
      <List
        className="my-3"
        itemLayout="horizontal"
        dataSource={coins}
        renderItem={(item, index) => {
          const isSell = true;
          const color = isSell ? '#FF5454' : '#2BC9BB';
          return (
            <List.Item key={index} className="cursor-pointer">
              <div className="flex flex-row">
                {isSell ? <TransactionSell /> : <TransactionBuy />}
                <div className="flex flex-col items-left ml-[15px]">
                  <Text className={`!font-semibold text-[${color}]`}>Sell</Text>
                  <Text className="!text-[14px]">May 28, 2021, 04:54 PM</Text>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <Text className={`!font-semibold`}>54.442 REFF</Text>
                <Text className="!text-[14px]">Paid 2.229,9443 USDT</Text>
              </div>
            </List.Item>
          );
        }}
      />

      <Button
        htmlType="submit"
        type="primary"
        className="w-full"
        onClick={() => {
          handleOk();
          openModal(ModalName.addTransactionModal);
        }}>
        {t(`Add Transaction`)}
      </Button>
    </Modal>
  );
};

export default memo(EditProfileModal);
