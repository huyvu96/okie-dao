import { closeModal, useModal } from '@doopage/use-modal';
import { Form, Modal, Select, Tabs } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalName } from 'utils/constants';
import Buy from './Buy';
import Sell from './Sell';
import './styles.scss';
import Transfer from './Transfer';
const { Option } = Select;

const { TabPane } = Tabs;
const modalName = ModalName.addTransactionModal;

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
  const callback = (key) => {};
  const renderTabBar = (props, DefaultTabBar) => {
    return <DefaultTabBar {...props} />;
  };
  return (
    <Modal
      title={t(`Add Transaction`)}
      visible={open}
      onCancel={handleCancel}
      className="w-[440px]"
      onOk={handleOk}
      destroyOnClose
      footer={null}>
      <Tabs
        onChange={callback}
        type="card"
        renderTabBar={renderTabBar}
        tabBarStyle={{ width: '100%' }}>
        <TabPane tab={t(`Buy`)} key="1">
          <Buy {...{ handleOk }} />
        </TabPane>
        <TabPane tab={t(`Sell`)} key="2">
          <Sell {...{ handleOk }} />
        </TabPane>
        <TabPane tab={t(`Transfer`)} key="3">
          <Transfer {...{ handleOk }} />
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default memo(AddTransactionModal);
