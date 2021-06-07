import { openModal } from '@doopage/use-modal';
import { Space, Table, Typography } from 'antd';
import BNB from 'assets/svgr/coin/BNB';
import BTC from 'assets/svgr/coin/BTC';
import ETH from 'assets/svgr/coin/ETH';
import PIVX from 'assets/svgr/coin/PIVX';
import USDT from 'assets/svgr/coin/USDT';
import MinusSquare from 'assets/svgr/MinusSquare';
import PlusSquare from 'assets/svgr/PlusSquare';
import FluctuationsValue from 'components/FluctuationsValue';
import currency from 'currency.js';
import { connectCommand } from 'meta/reducer';
import { ModalName } from 'utils/constants';
const { Text } = Typography;
const PortTable = ({ viewOnly }) => {
  let dataSource = [
    {
      key: '1',
      name: 'Bitcoin',
      shortName: 'BTC',
      price: 3751.65,
      hollings: 1200,
      value: 6.44,
      img: <BTC />,
    },
    {
      key: '2',
      name: 'Ethereum',
      shortName: 'ETH',
      price: 3751.65,
      hollings: 1200,
      value: -4.72,
      img: <ETH />,
    },
    {
      key: '3',
      name: 'Tether',
      shortName: 'USDT',
      price: 3751.65,
      hollings: 1200,
      value: 4.72,
      img: <USDT />,
    },
    {
      key: '4',
      name: 'Binance Coin',
      shortName: 'BNB',
      price: 3751.65,
      hollings: 1200,
      value: 4.72,
      img: <BNB />,
    },
    {
      key: '5',
      name: 'PIVX',
      shortName: 'PIVX',
      price: 3751.65,
      hollings: 1200,
      value: 4.72,
      img: <PIVX />,
    },
  ];

  let columns = [
    {
      title: 'Coin name',
      key: 'name',
      render: (record) => (
        <Space className="flex flex-row items-center ">
          {record.img}
          <label className="hidden lg:flex">{record.name}</label>
          <label>{record.shortName}</label>
        </Space>
      ),
    },
    {
      title: 'Price',
      key: 'price',
      render: (record) => {
        return currency(record.price).format();
      },
    },
    {
      title: '24h',
      dataIndex: 'value',
      key: 'value',
      render: (text) => <FluctuationsValue {...{ value: text }} />,
    },
    {
      title: 'Hollings',
      key: 'hollings',
      render: (record) => {
        return (
          <Space direction="vertical" size={0} align="end">
            <Text>{currency(record.hollings, { precision: 0 }).format()}</Text>
            <Text className="!text-sm">{`1000 ${record.shortName}`}</Text>
          </Space>
        );
      },
    },
    {
      title: 'Profit/Loss',
      dataIndex: 'profitloss',
      key: 'profitloss',
      render: (record) => {
        return (
          <Space direction="vertical" size={0} align="end">
            <Text>+ {currency(85.99).format()}</Text>
            <Text className="!text-sm !text-primary">0.15%</Text>
          </Space>
        );
      },
    },
  ];
  if (!viewOnly)
    columns.push({
      title: 'Action',
      render: (record) => {
        return (
          <Space>
            <PlusSquare
              width={20}
              height={20}
              onClick={() => {
                openModal(ModalName.addTransactionModal, { data: {} });
              }}
            />
            <MinusSquare />
          </Space>
        );
      },
    });
  return (
    <div className={`!w-full ${viewOnly ? `` : `mt-[30px]`}`}>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default connectCommand(PortTable);
