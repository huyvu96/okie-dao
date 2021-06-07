import LayoutContainer from 'components/LayoutContainer';
import { Breadcrumb, Button, Card, Divider, Form, Radio, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowLeft } from 'assets/svgs/arrowLeft.svg';
import { ReactComponent as ArrowRight } from 'assets/svgs/arrowRight.svg';

const { Text } = Typography;

const questions = [
  {
    question: 'How did you know about OKieDao?',
    answers: ['Google', 'Friend', 'Coinbase', 'Others'],
  },
  {
    question: 'What activities do you use OKieDao?',
    answers: ['Invest', 'Trading', 'Expense', 'Others'],
  },
  {
    question: 'What activities do you use OKieDao?',
    answers: ['Invest', 'Trading', 'Expense', 'Others'],
  },
];

const QuizTask = React.memo((props) => {
  const { t } = useTranslation();
  return (
    <LayoutContainer>
      <div className="px-[120px] py-[30px]">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={'/'}>{t(`News`)}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={'/profile'}>{t(`Lesson`)}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{t(`Detail`)}</Breadcrumb.Item>
        </Breadcrumb>

        <Card className="mt-[30px]">
          <Space direction="vertical" size={30}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque etiam leo,
              porttitor nunc dui in at cras. Pretium neque augue ullamcorper et vulputate sed augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque etiam leo,
              porttitor nunc dui in at cras..
            </Text>
            <Text className="!font-semibold">The habit of OkieDao owners</Text>
            <div className="border border-[#D8DEEB] rounded-[10px] p-[30px]">
              <Form
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={() => {}}
                onFinishFailed={() => {}}>
                <Space
                  className="w-full"
                  size={30}
                  direction="vertical"
                  split={<Divider className="my-[30px]" />}>
                  {questions.map((item, index) => {
                    const { question, answers } = item;
                    return (
                      <div className="flex flex-row">
                        <Text>Question {index + 1}</Text>
                        <Space direction="vertical" size={30} className="ml-[17px]">
                          <Text className="!font-semibold">{question}</Text>
                          <Form.Item name={question} rules={[{ required: true }]} className="!mb-0">
                            <Radio.Group>
                              <Space direction="vertical">
                                {answers.map((a) => (
                                  <Radio value={a}>{a}</Radio>
                                ))}
                              </Space>
                            </Radio.Group>
                          </Form.Item>
                        </Space>
                      </div>
                    );
                  })}
                </Space>
              </Form>
            </div>
          </Space>
        </Card>

        <div className="flex flex-row justify-between mt-[30px]">
          <Space size={20}>
            <Button onClick={() => {}} className="rounded-[12px] bg-[#F3F3F3]">
              <ArrowLeft />
            </Button>
            <Button onClick={() => {}} className="rounded-[12px]   bg-[#F3F3F3]">
              <ArrowRight />
            </Button>
            <Text className="!font-semibold"> 3 of 10</Text>
          </Space>
          <Button type="primary" onClick={() => {}} className="submit-content-btn">
            {t(`Submit`)}
          </Button>
        </div>
      </div>
    </LayoutContainer>
  );
});

export default QuizTask;
