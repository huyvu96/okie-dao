import { Select } from 'antd';
import BNB from 'assets/svgr/coin/BNB';
import BTC from 'assets/svgr/coin/BTC';
import ETH from 'assets/svgr/coin/ETH';
import PIVX from 'assets/svgr/coin/PIVX';
import USDT from 'assets/svgr/coin/USDT';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
const { Option } = Select;

const coins = [
  {
    key: '1',
    name: 'Bitcoin',
    shortName: 'BTC',

    img: <BTC width={24} height={24} />,
  },
  {
    key: '2',
    name: 'Ethereum',
    shortName: 'ETH',

    img: <ETH width={24} height={24} />,
  },
  {
    key: '3',
    name: 'Tether',
    shortName: 'USDT',

    img: <USDT width={24} height={24} />,
  },
  {
    key: '4',
    name: 'Binance Coin',
    shortName: 'BNB',

    img: <BNB width={24} height={24} />,
  },
  {
    key: '5',
    name: 'PIVX',
    shortName: 'PIVX',
    img: <PIVX width={24} height={24} />,
  },
];
const SelectCrypto = ({ value = {}, onChange }) => {
  const { t } = useTranslation();
  const [crypto, setCrypto] = useState(coins[0].name);
  const triggerChange = (changedValue) => {
    onChange?.({
      crypto,
      ...value,
      ...changedValue,
    });
  };
  const onCryptoChange = (crypto) => {
    setCrypto(crypto);
    triggerChange({
      crypto,
    });
  };

  return (
    <Select value={value.crypto || crypto} onChange={onCryptoChange} className="w-full">
      {coins.map((i) => {
        return (
          <Option value={i.name}>
            <div className="flex flex-row items-center w-full">
              {i.img}
              <div className="mx-3">{i.name}</div>
              {i.shortName}
            </div>
          </Option>
        );
      })}
    </Select>
  );
};

export default memo(SelectCrypto);
