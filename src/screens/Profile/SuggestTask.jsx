import { Card, Space } from 'antd';
import SuggestTaskCard from 'components/SuggestTaskCard';
import { connectCommand } from 'meta/reducer';
import { useTranslation } from 'react-i18next';

const SuggestTask = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[380px] hidden lg:flex">
      <Card title={t(`Suggest Task `)} style={{ width: '100%', height: '100%' }}>
        <Space direction="vertical" size={30}>
          <SuggestTaskCard />
          <SuggestTaskCard />
          <SuggestTaskCard progress={23} />
        </Space>
      </Card>
    </div>
  );
};
export default connectCommand(SuggestTask);
