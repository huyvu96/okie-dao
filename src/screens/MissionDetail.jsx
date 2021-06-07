import { Breadcrumb, Button, Card, Row, Typography } from 'antd';
import LayoutContainer from 'components/LayoutContainer';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CardDetail from 'components/CardDetail';
import CardOverview from 'components/CardOverview';

const { Text } = Typography;

const EventDetail = (props) => {
  const { t } = useTranslation();
  const { id, type } = useParams();
  // let history = useHistory();

  return (
    <LayoutContainer>
      <div className="p-[20px] px-[120px]">
        <Breadcrumb className="detail-post antd-breadcrumb" separator=">">
          <Breadcrumb.Item>Event</Breadcrumb.Item>
          <Breadcrumb.Item>Mission</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">{t(`Detail`)}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row className="flex flex-1 flex-row w-full mt-[20px]">
          <div className="flex flex-1 flex-col">
            <CardDetail
              date={new Date()}
              title={'Should Bitcoin traders be worried about lower highs'}
              host={'WREN DWIGHT'}
              attendees={120}
              address={'679 Dien Bien Phu, Ward 1, Dist.1 HCMC'}
              time={'Friday at 2PM - 3:30PM'}
              type={'Offline Event'}
            />
            <Card className="mt-[30px]" bodyStyle={{ padding: 30 }}>
              <div className="flex flex-col">
                <Text className="text-[20px] leading-[20px] font-semibold">About</Text>
                <Text className="mt-[20px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasinoei architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia...
                </Text>
              </div>
            </Card>
            <Card className="mt-[30px]" bodyStyle={{ padding: 30 }}>
              <div className="flex flex-col">
                <Text className="text-[20px] leading-[20px] font-semibold">Rule</Text>
                <Text className="mt-[20px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasinoei architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia...
                </Text>
              </div>
            </Card>
          </div>

          <div>
            <div className="w-[380px] ml-[30px]">
              <CardOverview status={'open'} tokenRewards={200} expiredIn={new Date()} />
              <div className="mt-[30px]">
                <img alt="img" src={'https://snipboard.io/o9z215.jpg'} className="w-full" />
              </div>
              <div className="mt-[30px]">
                <Button type="primary" className="w-full" round>
                  START
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </LayoutContainer>
  );
};

export default memo(connectCommand(EventDetail));
