import { Input, Select, Space } from 'antd';
import Binance from 'assets/svgr/cryptocurrencyExchange/Binance';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
const { Option } = Select;

const APIKeyForm = ({ value = {}, onChange }) => {
  const { t } = useTranslation();
  const [api, setApi] = useState('');
  const [cryptocurrencyExchange, setCryptocurrencyExchange] = useState('binance');
  const triggerChange = (changedValue) => {
    onChange?.({
      api,
      cryptocurrencyExchange,
      ...value,
      ...changedValue,
    });
  };
  const onCryptocurrencyExchangeChange = (cryptocurrencyExchange) => {
    setCryptocurrencyExchange(cryptocurrencyExchange);
    triggerChange({
      cryptocurrencyExchange,
    });
  };
  const onApiChange = (e) => {
    setApi(e.target.value);
    triggerChange({
      api: e.target.value,
    });
  };
  return (
    <>
      <Select
        value={value.cryptocurrencyExchange || cryptocurrencyExchange}
        onChange={onCryptocurrencyExchangeChange}>
        <Option value="binance">
          <Space>
            <Binance width={24} height={24} />
            Binance
          </Space>
        </Option>
        {/* <Option value="metaFace">
          <Space>
            <Binance width={24} height={24} />
            Metaface
          </Space>
        </Option> */}
      </Select>
      <Input
        className="!mt-3.5"
        type="text"
        value={value.api || api}
        onChange={onApiChange}
        placeholder="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
      />
    </>
  );
};

export default memo(APIKeyForm);
