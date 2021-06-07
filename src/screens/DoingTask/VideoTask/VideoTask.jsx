import { Breadcrumb, Button, Card, Row, Typography } from 'antd';
import LayoutContainer from 'components/LayoutContainer';
import { connectCommand } from 'meta/reducer';
import React, { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CardDetail from 'components/CardDetail';
import CardOverview from 'components/CardOverview';
import CardTasks from 'screens/EventDetail/CardTasks';
import CardVideo from 'screens/DoingTask/VideoTask/CardVideo';
import OtherVideo from 'screens/DoingTask/VideoTask/OtherVideo';

const { Text } = Typography;

const VideoTask = (props) => {
  const { t } = useTranslation();
  const { id, type } = useParams();
  // let history = useHistory();

  return (
    <LayoutContainer>
      <div className="p-[20px] px-[120px]">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={'/'}>{t(`News`)}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={'/profile'}>{t(`Lesson`)}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{t(`Detail`)}</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="flex flex-1 flex-row w-full mt-[20px]">
          <div className="flex flex-1 flex-col">
            <CardVideo
              date={new Date()}
              title={'Should Bitcoin traders be worried about lower highs'}
              host={'WREN DWIGHT'}
              attendees={120}
              time={'Friday at 2PM - 3:30PM'}
            />
          </div>

          <div className="w-[380px] ml-[30px]">
            <OtherVideo />
          </div>
        </Row>
      </div>
    </LayoutContainer>
  );
};

export default memo(connectCommand(VideoTask));
