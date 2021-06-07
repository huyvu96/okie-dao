import { Input, Select, Space } from 'antd';
import Metamask from 'assets/svgr/wallet/Metamask';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
const { Option } = Select;

const WalletAddressForm = ({ value = {}, onChange }) => {
  const { t } = useTranslation();
  const [walletAddress, setWalletAddress] = useState('');
  const [walletType, setWalletType] = useState('metaMask');
  const triggerChange = (changedValue) => {
    onChange?.({
      walletAddress,
      walletType,
      ...value,
      ...changedValue,
    });
  };
  const onWalletTypeChange = (walletType) => {
    setWalletType(walletType);
    triggerChange({
      walletType,
    });
  };
  const onAddressChange = (e) => {
    setWalletAddress(e.target.value);
    triggerChange({
      walletAddress: e.target.value,
    });
  };
  return (
    <>
      <Select value={value.walletType || walletType} onChange={onWalletTypeChange}>
        <Option value="metaMask">
          <Space>
            <Metamask width={24} height={24} />
            Metamask
          </Space>
        </Option>
        <Option value="metaFace">
          <Space>
            <Metamask width={24} height={24} />
            Metaface
          </Space>
        </Option>
      </Select>
      <Input
        className="!mt-3.5"
        type="text"
        value={value.walletAddress || walletAddress}
        onChange={onAddressChange}
        placeholder="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
      />
    </>
  );
};

export default memo(WalletAddressForm);
