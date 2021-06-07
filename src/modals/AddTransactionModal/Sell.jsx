import { Button, DatePicker, Form, Input, Typography } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import SelectCrypto from './SelectCrypto';
const { Text } = Typography;
const SellTransaction = ({ handleOk }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const onValuesChange = () => {};
  const Space = () => <div className="w-[15px] h-[15px]" />;
  return (
    <Form
      className=""
      layout="vertical"
      form={form}
      initialValues={{}}
      onValuesChange={onValuesChange}
      onFinish={(values) => {
        handleOk();
        console.log('values', { values });
      }}>
      <Form.Item name="crypto" className="flex-1">
        <SelectCrypto {...{ handleOk }} />
      </Form.Item>

      <div className="flex flex-row items-center justify-between">
        <Form.Item label={t(`Quantity`).toUpperCase()} name="quantity" className="flex-1">
          <Input className="w-full" />
        </Form.Item>
        <Space />
        <Form.Item label={t(`Price Per Coin`).toUpperCase()} name="price" className="flex-1">
          <Input />
        </Form.Item>
      </div>
      <div className="flex flex-row items-center justify-between">
        <Form.Item label={t(`Fee`).toUpperCase()} name="fee" className="flex-1">
          <Input />
        </Form.Item>
        <Space />
        <Form.Item label={t(`Time`).toUpperCase()} name="time" className="flex-1">
          <DatePicker className="w-full" showTime />
        </Form.Item>
      </div>
      <Form.Item label={t(`Note`).toUpperCase()} name="note" className="flex-1">
        <Input />
      </Form.Item>
      <Form.Item label={t(`Total Spent`).toUpperCase()} name="total" className="flex-1">
        <Text className="text-[20px] leading-[20px] font-semibold">$56977,1020681</Text>
      </Form.Item>
      <Button htmlType="submit" type="primary" className="w-full">
        {t(`Add Transaction`)}
      </Button>
    </Form>
  );
};
export default memo(SellTransaction);
