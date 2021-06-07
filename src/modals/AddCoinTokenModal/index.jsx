import { closeModal, openModal, useModal } from '@doopage/use-modal';
import { Form, Input, List, Modal, Select } from 'antd';
import ArrowRight from 'assets/svgr/ArrowRight';
import BNB from 'assets/svgr/coin/BNB';
import BTC from 'assets/svgr/coin/BTC';
import ETH from 'assets/svgr/coin/ETH';
import PIVX from 'assets/svgr/coin/PIVX';
import USDT from 'assets/svgr/coin/USDT';
import Search from 'assets/svgr/Search';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalName } from 'utils/constants';
import './styles.scss';
const { Option } = Select;
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const modalName = ModalName.addCoinTokenModal;
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

const AddTransactionModal = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { open, data } = useModal(modalName);

  const handleOk = () => {
    closeModal(modalName);
  };

  const handleCancel = () => {
    closeModal(modalName);
  };

  return (
    <Modal
      title={t(`Add Coin/Token`)}
      visible={open}
      onCancel={handleCancel}
      className="w-[500px] max-h-[500px]"
      onOk={handleOk}
      destroyOnClose
      footer={null}>
      <Input className="" placeholder={t(`Search coins`)} prefix={<Search />} type="search" />
      <List
        className="mt-3"
        itemLayout="horizontal"
        dataSource={coins}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            className="cursor-pointer"
            onClick={() => {
              closeModal(modalName);
              openModal(ModalName.addTransactionModal, {
                data: {},
              });
            }}>
            <List.Item.Meta avatar={item.img} title={item.name} />
            <ArrowRight width={6} height={10} />
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default memo(AddTransactionModal);
