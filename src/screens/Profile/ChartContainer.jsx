import { Button, Card, Space, Tabs, Typography } from 'antd';
import { ReactComponent as LineChartIcon } from 'assets/svgs/lineChart.svg';
import { ReactComponent as PieChartIcon } from 'assets/svgs/pieChart.svg';
import classNames from 'classnames';
import { connectCommand } from 'meta/reducer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'screens/Profile/Chart';
import './ChartContainer.scss';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const timeButtons = ['24h', '7d', '30d', '90d', 'All'];

const ChartContainer = ({ viewOnly }) => {
  const { t } = useTranslation();

  const [chartType, setChartType] = useState('line');
  const [time, setTime] = useState('7d');

  return (
    <div className={`!w-[380px] hidden lg:flex ${viewOnly ? `` : `my-[30px]`} chart-container`}>
      <Card style={{ width: '100%', height: '100%' }}>
        <div className="flex flex-row items-center justify-between">
          <div>
            <div>
              <Title level={5}>{t(`Current Balance`)}</Title>
              <Text className="text-3xl font-semibold">$85,892.48</Text>
            </div>
            <Text className="text-base mt-[15px]" type="success">
              +$85,878.15 (24h)
            </Text>
          </div>

          <div className="w-[88px] h-[42px] bg-[#2BC9BB] rounded-[15px] px-[20px] flex items-center">
            <Text className="text-semibold text-[20px] leading-[20px] text-white">-15%</Text>
          </div>
        </div>
        {/*  */}
        <div className="w-full mt-[30px]">
          <Tabs activeKey={chartType} onChange={(key) => setChartType(key)}>
            <TabPane
              tab={
                <Space>
                  <LineChartIcon fill={chartType === 'line' ? 'white' : 'black'} />
                  <div
                    className="font-semibold"
                    style={{ color: chartType === 'line' ? 'white' : 'black' }}>
                    {t(`Line chart`)}
                  </div>
                </Space>
              }
              key="line">
              <Chart type="line" />
            </TabPane>

            <TabPane
              tab={
                <Space>
                  <PieChartIcon fill={chartType === 'pie' ? 'white' : 'black'} />
                  <div
                    className="font-semibold"
                    style={{ color: chartType === 'pie' ? 'white' : 'black' }}>
                    {' '}
                    {t(`Pie chart`)}
                  </div>
                </Space>
              }
              key="pie">
              <Chart type="pie" />
            </TabPane>
          </Tabs>
        </div>

        <div className="flex flex-row justify-between mt-[30px]">
          {timeButtons.map((btn, index) => {
            return (
              <Button
                key={index}
                type="text"
                className={classNames({ 'bg-[#F9F9F9]': time === btn })}
                onClick={() => setTime(btn)}>
                {btn}
              </Button>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
export default connectCommand(ChartContainer);
