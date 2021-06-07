import { Button, Card, Typography } from 'antd';
import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Users } from 'assets/svgs/users.svg';
import { ReactComponent as Clock } from 'assets/svgs/clockOutline.svg';

import { thousandSeparator } from 'utils/format';
import YouTube from 'react-youtube';

const { Text } = Typography;

const CardVideo = React.memo(({ date, time, title, host, attendees }) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full" bodyStyle={{ padding: 30 }}>
      <YouTube videoId={'QqsLTNkzvaY'} className="rounded-[15px] w-full mb-[30px]" />
      <div className="flex flex-row relative overflow-hidden">
        <div className="flex flex-col flex-1 mx-[16px]">
          <Text className="semi-bold text-[18px] leading-[18px]">{title}</Text>
          <div className="flex flex-row mt-[15px] w-full items-center">
            <Text type="secondary" className="mb-[10px] !font-semibold">
              {t('by') + ' '}
              <span className="primary-color">{host}</span>
              {' • 4 hours ago'}
            </Text>
          </div>
          <Text className="mt-[20px]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus id quod Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod
          </Text>

          <div>
            <Button type="primary" onClick={() => {}} className="submit-content-btn mt-[20px]">
              {t(`Submit`)}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
});

export default CardVideo;
