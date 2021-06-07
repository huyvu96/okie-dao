import { Button, Input, Space, Typography } from 'antd';
import Search from 'assets/svgr/Search';
import SectionContent from 'components/SectionContent';
import SideMenuContainer from 'components/SideMenuContainer';
import { connectCommand } from 'meta/reducer';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import './AdminManageRanking.scss';
import ManageRankContentTable from './ManageRankContentTable';
import ManageRankFollowTable from './ManageRankFollowTable';
import ManageRankPortfolioTable from './ManageRankPortfolioTable';
import ManageRankTokenTable from './ManageRankTokenTable';
const { Title } = Typography;
export const SCOPE = {
  Follow: 'Follow',
  Portfolio: 'Portfolio',
  Token: 'Token',
  Content: 'Content',
};

const AdminManageRanking = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [scope, setScope] = useState(SCOPE.Follow);

  return (
    <SideMenuContainer>
      <Space size={30} direction={'vertical'} className="flex flex-1 w-full">
        <SectionContent>
          <div className="flex flex-row w-full justify-between items-center">
            <Space size={1}>
              <Title level={4}>{scope}</Title>
              {/* <Badge overflowCount={999} count={252} className={'badge'} /> */}
            </Space>
            <Space>
              <Input
                className="max-w-[340px] h-[42px]"
                placeholder={t(`Search`)}
                prefix={<Search />}
                type="search"
              />
              <Button
                className={'btn btn-follow dark:text-black'}
                type="primary"
                onClick={() => {
                  setScope(SCOPE.Follow);
                }}>
                {SCOPE.Follow}
              </Button>
              <Button
                className={'btn btn-portfolio dark:text-black'}
                type="primary"
                onClick={() => {
                  setScope(SCOPE.Portfolio);
                }}>
                {SCOPE.Portfolio}
              </Button>
              <Button
                className={'btn btn-token dark:text-black'}
                type="primary"
                onClick={() => {
                  setScope(SCOPE.Token);
                }}>
                {SCOPE.Token}
              </Button>
              <Button
                className={'btn btn-content dark:text-black'}
                type="primary"
                onClick={() => {
                  setScope(SCOPE.Content);
                }}>
                {SCOPE.Content}
              </Button>
            </Space>
          </div>
          {scope === SCOPE.Follow && <ManageRankFollowTable {...{ scope }} />}
          {scope === SCOPE.Portfolio && <ManageRankPortfolioTable {...{ scope }} />}
          {scope === SCOPE.Token && <ManageRankTokenTable {...{ scope }} />}
          {scope === SCOPE.Content && <ManageRankContentTable {...{ scope }} />}
        </SectionContent>
      </Space>
    </SideMenuContainer>
  );
};

export default memo(connectCommand(AdminManageRanking));
