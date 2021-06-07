import { closeModal, useModal } from '@doopage/use-modal';
import { Avatar, Button, DatePicker, Form, Input, Modal, Select, Upload } from 'antd';
import { ReactComponent as CameraIcon } from 'assets/svgs/camera.svg';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalName } from 'utils/constants';
import APIKeyForm from './APIKeyForm';
import WalletAddressForm from './WalletAddressForm';

const { Option } = Select;

const modalName = ModalName.editProfileModal;
function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    alert('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    alert('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const EditProfileModal = () => {
  const [avtUploading, setAvtUploading] = useState(false);
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { open, data } = useModal(modalName);

  const handleOk = () => {
    closeModal(modalName);
  };

  const handleCancel = () => {
    closeModal(modalName);
  };
  const onValuesChange = (data) => {
    console.log('onValuesChange', { data });
  };
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setAvtUploading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setAvtUploading(false);
        //
      });
    }
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle initialValues={84}>
      <Select style={{ width: 100 }}>
        <Option value="86">+84</Option>
        <Option value="87">+1</Option>
      </Select>
    </Form.Item>
  );
  const Space = () => <div className="w-[15px] h-[15px]" />;
  return (
    <Modal
      title={t(`Edit Profile`)}
      visible={open}
      onCancel={handleCancel}
      className="w-[500px]"
      destroyOnClose
      footer={null}>
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
        <Upload
          className="flex w-full justify-center mb-[30px]"
          name="avatar"
          // listType="picture-card"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}>
          <div className="flex relative">
            <Avatar size={100} src={'https://i.pravatar.cc/309'} />
            <CameraIcon className="absolute h-[32px] w-[32px] bottom-0 ml-[68px]" />
          </div>
        </Upload>
        <div className="flex flex-row items-center justify-between">
          <Form.Item label={t(`Display Name`).toUpperCase()} name="displayName" className="flex-1">
            <Input />
          </Form.Item>
          <Space />
          <Form.Item
            label={t(`Email`).toUpperCase()}
            name="email"
            className="flex-1"
            rules={[
              {
                type: 'email',
                message: t('The input is not valid email'),
              },
              {
                required: true,
                message: t('Please input your email'),
              },
            ]}>
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Form.Item
            label={t(`Date Of Birth`).toUpperCase()}
            name="dateOfBirth"
            className="flex-1"
            rules={[{ type: 'object', required: true, message: t('Please select time') }]}>
            <DatePicker className="w-full" />
          </Form.Item>
          <Space />
          <Form.Item label={t(`Phone Number`).toUpperCase()} name="phoneNumber" className="flex-1">
            <Input addonBefore={prefixSelector} />
          </Form.Item>
        </div>
        <Form.Item label={t(`Telegram Username`).toUpperCase()} name="telegramUsername">
          <Input addonBefore={`telegram.com/`} placeholder="username" />
        </Form.Item>
        <Form.Item
          label={t(`Wallet Address`).toUpperCase()}
          name="walletAddress"
          rules={[
            { required: true },
            {
              validator: (_, v) => {
                if (!v.walletAddress) {
                  return Promise.reject(new Error(t(`Please input your wallet address`)));
                }
                return Promise.resolve();
              },
            },
          ]}>
          <WalletAddressForm />
        </Form.Item>
        <Form.Item
          label={t(`API Key`).toUpperCase()}
          name="apiKey"
          rules={[
            { required: true },
            {
              validator: (_, v) => {
                if (!v.api) {
                  return Promise.reject(new Error(t(`Please input your api key`)));
                }
                return Promise.resolve();
              },
            },
          ]}>
          <APIKeyForm />
        </Form.Item>
        <Form.Item className="!mb-0">
          <Button htmlType="submit" type="primary" className="w-full">
            {t(`Update`)}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default memo(EditProfileModal);
