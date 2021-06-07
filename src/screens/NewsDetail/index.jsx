import { Breadcrumb, Row, Affix } from 'antd';
import LayoutContainer from 'components/LayoutContainer';
import { connectCommand } from 'meta/reducer';
import { memo } from 'react';
import CardContent from 'screens/NewsDetail/CardContent';
import ListOfArticles from 'screens/NewsDetail/ListOfArticles';
import OtherNews from 'screens/NewsDetail/OtherNews';
import { titleCase } from 'utils/format';
import './NewsDetail.scss';

const NewsDetail = (props) => {
  // const { t } = useTranslation();
  // const { id } = useParams();
  // let history = useHistory();

  return (
    <LayoutContainer>
      <div className="py-[20px] px-[120px]">
        <Breadcrumb className="detail-post antd-breadcrumb" separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">{titleCase(window.location.pathname.split('/')[1])}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row className="flex flex-1 flex-row w-full mt-[20px]">
          <div className="flex flex-1 flex-wrap">
            <CardContent />
          </div>

          <Affix offsetTop={10}>
            <div className="w-[320px] ml-[30px]">
              <ListOfArticles />
              <div className="mt-[30px]">
                <OtherNews />
              </div>
            </div>
          </Affix>
        </Row>
      </div>
    </LayoutContainer>
  );
};

export default memo(connectCommand(NewsDetail));
