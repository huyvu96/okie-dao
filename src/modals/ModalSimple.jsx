import { closeModal, useModal } from '@doopage/use-modal';
import { Modal } from 'antd';
import { memo } from 'react';
import { Trans } from 'react-i18next';
import { ModalName } from 'utils/constants';

const modalName = ModalName.modalSimple;

const ModalSimple = () => {
  const { open, data } = useModal(modalName);

  const handleOk = () => {
    closeModal(modalName);
  };

  const handleCancel = () => {
    closeModal(modalName);
  };

  return (
    <Modal
      title={<Trans i18nKey="Simple modal" />}
      visible={open}
      onOk={handleOk}
      onCancel={handleCancel}>
      {JSON.stringify(data || '{}')}
    </Modal>
  );
};

export default memo(ModalSimple);
