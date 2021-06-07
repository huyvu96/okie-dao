import { Avatar, Button, Card, Divider, message, Space, Typography } from 'antd';
import DollarImage from 'assets/pngs/dollar.png';
import { ReactComponent as Like } from 'assets/svgs/like.svg';
import { ReactComponent as Share } from 'assets/svgs/share.svg';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';
import WriterInfo from 'screens/NewsDetail/WriterInfo';
const { Text, Paragraph } = Typography;

const articles = [
  {
    title: 'PayPal is in the works for the launch of a stablecoin',
    content:
      "Stablecoins are digital assets that represent real or government-backed currency that use blockchain as a payment framework. Currently, there are more than $ 80 billion of stablecoins circulating in the market. And there have long been rumors circulating about PayPal's stablecoin ambitions . The move has been described as a well-known secret in the crypto industry.",
  },
  {
    title: 'Partner of PayPal in issuing stablecoins',
    content:
      'Some sources claim that PayPal has been in talks with a number of stablecoin protocol developers in the industry - which suggests the payments giant may be moving towards partnering with a third-party company.\n' +
      'Although no official news has been released yet, according to a source, Ava Labs - the Avalanche blockchain operating group , is one of the organizations that has negotiated with PayPal on the development of stablecoins. Aside from Ava Labs, there is currently no further information about which other partners have participated in the discussions. If PayPal continues with such a project, it will create a significant escalation in workload in the crypto sector.',
  },
  {
    title: 'Identify',
    content:
      'With the above information, it is probably only a matter of time before the payment giant issues a stablecoin to the market. While the rumor that Paypal is likely to work with the Avalanche blockchain project has not been verified, if this combination does take place, the Avalanche ecosystem will be strong Fomo by retail investors and funds will keep an eye on to this potential ecosystem.',
  },
];

const CardContent = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Card>
      <WriterInfo />
      <img alt="img" src={DollarImage} className="mt-[30px] w-full rounded-[15px]" />
      <div className="mt-[20px]">
        <Text className="text-[22px] font-semibold leading-[30px] !mt-[20px]">
          Rumors of PayPal shaking hands with Avalanche to develop stablecoin
        </Text>
      </div>

      <div className="mt-[30px] flex flex-row justify-between items-center">
        <Text className="">
          by <span className="primary-color">Guy McCartney</span> • 4 hours ago
        </Text>
        <Avatar.Group
          maxCount={4}
          maxStyle={{ color: '#FFFFFF', backgroundColor: '#C1C7D0' }}
          className="mb-[10px]">
          {/*{*/}
          {/*    viewers?.map(viewer =>  <Avatar src={viewer?.avatar} />)*/}
          {/*}*/}
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Avatar.Group>
      </div>

      {articles.map((article) => {
        return (
          <div className="mt-[20px]">
            <Text className="text-[16px] font-semibold leading-[16px]" id={article.title}>
              {article.title}
            </Text>
            <Paragraph className="!text-[#3B3F45] !leading-[22px] !mt-[10px]">
              {article.content}
            </Paragraph>
          </div>
        );
      })}

      <Divider className="!my-[10px]" />
      <div className="flex flex-row justify-between items-center">
        <div className="primary-color flex flex-row ">
          <div>1.5K Likes</div>
          <div className="ml-[20px]">2.3K Share</div>
        </div>

        <div>
          <Button type="text">
            <Space>
              <Like /> <Text className="!text-[#727A88]">Like</Text>
            </Space>
          </Button>
          <CopyToClipboard
            text={window.location.href}
            onCopy={() => message.success(t(`This link has been copied to the clipboard`))}>
            <Button type="text">
              <Space>
                <Share /> <Text className="!text-[#727A88]">{t(`Share`)}</Text>
              </Space>
            </Button>
          </CopyToClipboard>
        </div>
      </div>
      <Divider className="!my-[10px]" />
    </Card>
  );
});

export default CardContent;
