import { Card, Space } from 'antd';
import { prop } from 'cheerio/lib/api/attributes';
import Banner from 'components/Banner';
import CardEvent from 'components/CardEvent';
import CardNews from 'components/CardNews';
import CardSignal from 'components/CardSignal';
import LayoutContainer from 'components/LayoutContainer';
import ListCards from 'components/ListCards';
import RankingBoard from 'components/RakingBoard';
import { connectCommand } from 'meta/reducer';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const history = useHistory();
  return (
    <LayoutContainer>
      <Banner />
      <div className="flex p-[30px] w-full flex-col md:flex-row">
        <Space className="md:pr-[30px] flex-1 overflow-x-auto" size={30} direction="vertical">
          <ListCards
            onViewAll={() => history.push('/events')}
            title={'Signal'}
            data={[1, 2, 3, 4]}
            separator={23}
            renderItem={() => (
              <CardSignal
                imgSrc={'https://snipboard.io/w6Raol.jpg'}
                name={'Bitcoin'}
                entry={`$237 - 260`}
                target={`$365 - 466 - 635`}
                stl={'$200'}
              />
            )}
          />
          <ListCards
            separator={30}
            onViewAll={() => history.push('/events')}
            title={'Hot news'}
            data={[1, 2, 3, 4]}
            renderItem={() => (
              <CardNews
                imgSrc={'https://snipboard.io/YFXAJC.jpg'}
                category={'ENHANCE'}
                title={'Rumors of PayPal shaking hands with Avalanche '}
                rating={4.5}
              />
            )}
          />
          <ListCards
            separator={30}
            onViewAll={() => history.push('/events')}
            title={'Events'}
            data={[1, 2, 3, 4]}
            renderItem={() => (
              <CardEvent
                title={'Should Bitcoin traders be worried about lower highs'}
                imgSrc={'https://snipboard.io/aivKt0.jpg'}
                host={'WREN DWIGHT'}
                address={'123 Nguyen Dinh Chieu, Ward 1, Dist.3, HCMC'}
                date={'Apr 29'}
                participants={2000}
              />
            )}
          />
          <ListCards
            separator={30}
            onViewAll={() => history.push('/events')}
            title={'New project'}
            data={[1, 2, 3, 4]}
            renderItem={() => (
              <CardNews
                imgSrc={'https://snipboard.io/YFXAJC.jpg'}
                category={'ENHANCE'}
                title={'Rumors of PayPal shaking hands with Avalanche '}
                rating={4.5}
              />
            )}
          />
        </Space>
        <div className="w-full md:w-[260px]">
          <Space direction="vertical" size={35}>
            <RankingBoard />
            <Card bodyStyle={{ padding: 0 }}>
              <img src={'https://snipboard.io/hHq0j7.jpg'} className="min-w-[260px]" />
            </Card>
          </Space>
        </div>
      </div>
    </LayoutContainer>
  );
};

Home.propTypes = {
  exProps: PropTypes.bool,
};

export default memo(connectCommand(Home));
