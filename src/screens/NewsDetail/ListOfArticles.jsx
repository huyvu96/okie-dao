import React from 'react';
import { Card, Space, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Document } from 'assets/svgs/document.svg';

const { Text } = Typography;

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

const ListOfArticles = React.memo(() => {
  const { t } = useTranslation();

  return (
    <Card title={t(`List of articles`)}>
      <Space direction="vertical" size={20}>
        {articles.map((article) => {
          return (
            <div
              className="flex flex-row w-full items-center cursor-pointer"
              onClick={() => {
                window.location.href = '#';
                window.location.href = '#' + article.title;
              }}>
              <div>
                <Document />
              </div>
              <Text className="ml-[15px] leading-[20px]">{article.title}</Text>
            </div>
          );
        })}
      </Space>
    </Card>
  );
});

export default ListOfArticles;
