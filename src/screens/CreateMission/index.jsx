import { Breadcrumb, Button, Card, Checkbox, DatePicker, Input, Select, Space, Upload } from 'antd';
import CardCollapse from 'components/CardCollapse';
import LayoutContainer from 'components/LayoutContainer';
import produce from 'immer';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { Link, useHistory } from 'react-router-dom';
import 'video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import YouTube from 'react-youtube';

const CreateMission = () => {
  const { t } = useTranslation();
  const [sections, setSections] = useState([{ title: '', content: '' }]);
  const [questions, setQuestions] = useState([
    { question: '', answers: [{ content: '', active: true }], type: 'single' },
  ]);
  const [videos, setVideos] = useState([{ title: '', link: '' }]);
  const [tasks, setTasks] = useState([{ title: '', name: '', type: 'single', link: '' }]);
  const [typeMission, setTypeMission] = useState('quiz');
  const history = useHistory();

  const TYPE_QUESTION = [
    { value: 'single', label: t(`Single Select`) },
    { value: 'multiple', label: t(`Multiple Select`) },
  ];

  const TYPE_MISSION = [
    { value: 'quiz', label: t(`Quiz`) },
    { value: 'video', label: t(`Video`) },
    { value: 'task', label: t(`Task`) },
  ];

  const CATEGORY = [{ value: '1', label: t(`this is label`) }];

  const onSelectCate = (value) => {
    console.log('select value ', value);
  };

  const addSection = () => {
    setSections(
      produce((draft) => {
        draft.push({ title: '', content: '' });
      }),
    );
  };

  const updateSection = (index, key, value) => {
    setSections(
      produce((draft) => {
        draft[index][key] = value;
      }),
    );
  };

  const addQuestion = () => {
    setQuestions(
      produce((draft) => {
        draft.push({ question: '', answers: [{ content: '' }] });
      }),
    );
  };

  const updateQuestion = (index, key, value) => {
    setQuestions(
      produce((draft) => {
        draft[index][key] = value;
      }),
    );
  };

  const removeQuestion = (index) => {
    setQuestions((items) => {
      return items.filter((_, i) => i !== index);
    });
  };

  const addAnswer = (index) => {
    setQuestions(
      produce((draft) => {
        draft[index].answers.push({ content: '', active: true, id: new Date().getTime() });
      }),
    );
  };

  const updateAnswer = (index, answerIndex) => (key, value) => {
    console.log(key, value);
    setQuestions(
      produce((draft) => {
        draft[index].answers[answerIndex][key] = value;
      }),
    );
  };

  const removeAnswer = (index, answerIndex) => {
    console.log('index', index, answerIndex);
    setQuestions(
      produce((draft) => {
        draft[index].answers.splice(answerIndex, 1);
      }),
    );
  };

  const addVideo = () => {
    setVideos(
      produce((draft) => {
        draft.push({ title: '', link: '' });
      }),
    );
  };

  const updateVideo = (index, key, value) => {
    setVideos(
      produce((draft) => {
        draft[index][key] = value;
      }),
    );
  };

  const removeVideo = (index) => {
    setVideos((items) => {
      return items.filter((_, i) => i !== index);
    });
  };

  const addTask = () => {
    setTasks(
      produce((draft) => {
        draft.push({ title: '', link: '' });
      }),
    );
  };

  const updateTask = (index, key, value) => {
    setTasks(
      produce((draft) => {
        draft[index][key] = value;
      }),
    );
  };

  const removeTask = (index) => {
    setTasks((items) => {
      return items.filter((_, i) => i !== index);
    });
  };

  return (
    <LayoutContainer>
      <div className="my-[30px]">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={'/'}>{t(`Home`)}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={'/profile'}>{t(`Profile`)}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{t(`Create Mission`)}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Space size={30} direction="vertical">
        <Card>
          <div className="flex justify-between">
            <Space size={20}>
              <div className="text-[20px] font-semibold">{t(`Create a New Note`)}</div>
              <Select
                onChange={onSelectCate}
                placeholder={t(`Select category`)}
                className="min-w-[200px]">
                {CATEGORY.map((item) => {
                  const { label, value } = item;
                  return <Select.Option value={value}>{label}</Select.Option>;
                })}
              </Select>
              <Select
                onChange={setTypeMission}
                placeholder={t(`Select type`)}
                value={typeMission}
                className="min-w-[200px]">
                {TYPE_MISSION.map((item) => {
                  const { label, value } = item;
                  return <Select.Option value={value}>{label}</Select.Option>;
                })}
              </Select>
            </Space>
            <Button
              onClick={() => {
                history.push({
                  pathname: '/mission/draft',
                  state: {
                    sections,
                    questions,
                    videos,
                    tasks,
                    type: typeMission,
                  },
                });
              }}
              className="btn-transparent">
              {t(`See Drafts`)}
            </Button>
          </div>
        </Card>

        <Card>
          <div className="flex justify-between">
            <Space size={20}>
              <div className="font-semibold">{t(`From`)}</div>
              <DatePicker className="w-full" />
              <div className="font-semibold">{t(`to`)}</div>
              <DatePicker className="w-full" />
            </Space>
            <Space size={20}>
              <div className="font-semibold">{t(`Max response`)}</div>
              <Input type="number" />
              <div className="font-semibold">
                {t(`Reward`)}
                <div className="text-[#BEC2C8] text-[12px] font-normal">{t(`per Response`)}</div>
              </div>
              <Input type="number" />
            </Space>
          </div>
        </Card>

        <Card>
          <Space className="w-full" size={30} direction="vertical">
            <Input placeholder={t(`Add a title`)} />
            <Upload.Dragger
              name="file"
              onChange={(info) => {
                console.log(info);
              }}>
              <div className="h-[320px] flex justify-center items-center flex-col">
                <p className="ant-upload-drag-icon flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.14988 3.25265C2.311 4.15231 1.80361 5.46772 1.80361 7.0969V16.9019C1.80361 18.5323 2.30875 19.8479 3.1459 20.7473C3.97631 21.6395 5.2005 22.1954 6.79359 22.1954H17.1944C18.7877 22.1954 20.0154 21.6393 20.849 20.7464C21.689 19.8465 22.1964 18.5311 22.1964 16.9019V7.0969C22.1964 5.46774 21.689 4.15263 20.8491 3.25313C20.0155 2.3605 18.7878 1.8046 17.1944 1.8046H6.79359C5.20704 1.8046 3.9823 2.35991 3.14988 3.25265ZM1.83109 2.0216C3.03975 0.725361 4.7609 0 6.79359 0H17.1944C19.2322 0 20.9564 0.724771 22.167 2.02112C23.3711 3.3106 24 5.09279 24 7.0969V16.9019C24 18.906 23.3711 20.6884 22.167 21.9782C20.9566 23.2748 19.2324 24 17.1944 24H6.79359C4.75541 24 3.03371 23.2747 1.82604 21.9772C0.625119 20.687 0 18.9047 0 16.9019V7.0969C0 5.09281 0.628885 3.31092 1.83109 2.0216ZM16.9099 13.6263C16.4419 13.1435 15.6581 13.1752 15.2302 13.6963L12.5503 16.9575C11.5594 18.1646 9.74035 18.2457 8.64696 17.1297L7.57741 16.0378C7.2649 15.7133 6.74652 15.716 6.4384 16.0417L4.59953 17.9826C4.2569 18.3443 3.68611 18.3596 3.32465 18.0167C2.96318 17.6739 2.94793 17.1028 3.29056 16.7411L5.12865 14.801C6.14466 13.7277 7.84852 13.7219 8.87327 14.7826L9.93493 15.8664C10.277 16.2156 10.8461 16.1905 11.1563 15.8125L13.8366 12.5507C14.9478 11.1974 16.9872 11.1136 18.2049 12.3703L20.7012 14.9474C21.0479 15.3052 21.0389 15.8764 20.6813 16.2233C20.3236 16.5701 19.7527 16.5611 19.4061 16.2033L16.9099 13.6263ZM6.68178 8.58206C6.68178 7.91515 7.22259 7.37418 7.88779 7.37418C8.55367 7.37418 9.09501 7.91582 9.09501 8.58206C9.09501 9.2483 8.55367 9.78994 7.88779 9.78994C7.22259 9.78994 6.68178 9.24897 6.68178 8.58206ZM7.88779 5.56958C6.22514 5.56958 4.87817 6.91984 4.87817 8.58206C4.87817 10.2443 6.22514 11.5945 7.88779 11.5945C9.54977 11.5945 10.8986 10.245 10.8986 8.58206C10.8986 6.91917 9.54977 5.56958 7.88779 5.56958Z"
                      fill="#E4948F"
                    />
                  </svg>
                </p>
                <p className="ant-upload-text">Drag and drop a cover photo</p>
                <p className="ant-upload-hint">
                  or <span className="text-primary">click</span> to choose a file
                </p>
              </div>
            </Upload.Dragger>
          </Space>
        </Card>

        <Card>
          <Space direction="vertical" className="w-full" size={30}>
            {sections.map((item, index) => {
              const { title, content } = item;
              return (
                <React.Fragment key={index}>
                  <Input
                    placeholder={t(`Add a title`)}
                    value={title}
                    onChange={(e) => updateSection(index, 'title', e.target.value)}
                  />
                  <ReactQuill
                    value={content}
                    onChange={(value) => updateSection(index, 'content', value)}
                    className="ant-input"
                  />
                </React.Fragment>
              );
            })}
            <Button onClick={addSection} className="btn-transparent">
              <Space>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.44167 0.666016H12.2167C15.05 0.666016 16.6667 2.26602 16.6667 5.10768V12.891C16.6667 15.716 15.0583 17.3327 12.225 17.3327H4.44167C1.6 17.3327 0 15.716 0 12.891V5.10768C0 2.26602 1.6 0.666016 4.44167 0.666016ZM9.01536 9.69115H11.382C11.7654 9.68281 12.0737 9.37448 12.0737 8.99115C12.0737 8.60781 11.7654 8.29948 11.382 8.29948H9.01536V5.94948C9.01536 5.56615 8.70703 5.25781 8.3237 5.25781C7.94036 5.25781 7.63203 5.56615 7.63203 5.94948V8.29948H5.2737C5.09036 8.29948 4.91536 8.37448 4.78203 8.49948C4.65703 8.63281 4.58203 8.80698 4.58203 8.99115C4.58203 9.37448 4.89036 9.68281 5.2737 9.69115H7.63203V12.0495C7.63203 12.4328 7.94036 12.7411 8.3237 12.7411C8.70703 12.7411 9.01536 12.4328 9.01536 12.0495V9.69115Z"
                    fill="#E4948F"
                  />
                </svg>
                {t(`Add Section`)}
              </Space>
            </Button>
          </Space>
        </Card>

        {typeMission === 'quiz' && (
          <Card>
            <Space direction="vertical" className="w-full" size={30}>
              {questions.map((item, index) => {
                const { question, answers, isRequired } = item;
                return (
                  <CardCollapse key={index} className="bg-[#F9F9F9]">
                    {({ isCollapse, setCollapse }) => (
                      <Space direction="vertical" className="w-full" size={30}>
                        <div className="flex justify-between">
                          <Space size={20}>
                            <div className="font-semibold">
                              {t(`Question `)}
                              {index + 1}
                            </div>
                            <Select
                              className="min-w-[250px]"
                              onChange={(value) => updateQuestion(index, 'type', value)}
                              placeholder={t(`Select Type`)}
                              defaultValue="single">
                              {TYPE_QUESTION.map((item) => {
                                const { label, value } = item;
                                return <Select.Option value={value}>{label}</Select.Option>;
                              })}
                            </Select>
                            <Checkbox
                              value={isRequired}
                              onChange={(e) =>
                                updateQuestion(index, 'isRequired', e.target.checked)
                              }>
                              {t(`Required`)}
                            </Checkbox>
                          </Space>
                          <Space size={20}>
                            <Button
                              onClick={() => setCollapse((preValue) => !preValue)}
                              className="btn-white">
                              <svg
                                width="15"
                                height="10"
                                viewBox="0 0 15 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.650295 1.16983C1.14236 0.677766 1.94014 0.677766 2.4322 1.16983L7.42125 6.15887L12.4103 1.16983C12.9024 0.677766 13.7001 0.677766 14.1922 1.16983C14.6843 1.66189 14.6843 2.45967 14.1922 2.95174L8.3122 8.83173C7.82014 9.32379 7.02236 9.32379 6.53029 8.83173L0.650295 2.95174C0.158235 2.45967 0.158235 1.66189 0.650295 1.16983Z"
                                  fill="#3B3F45"
                                />
                              </svg>
                            </Button>
                            <Button onClick={() => removeQuestion(index)} className="btn-white">
                              <svg
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.7826 1.15865C10.5436 0.455229 9.92288 0 9.2199 0H5.77993L5.64916 0.00527624C4.95767 0.0612443 4.36759 0.557471 4.18587 1.25444L3.97953 2.30678L3.95535 2.39941C3.85668 2.69898 3.58106 2.90703 3.26607 2.90761H0.609492L0.526787 2.91331C0.229294 2.9547 0 3.2162 0 3.53263C0 3.87782 0.272879 4.15765 0.609492 4.15765H3.26369C3.26405 4.15765 3.2644 4.15765 3.26476 4.15765C3.2654 4.15765 3.26604 4.15765 3.26668 4.15765H11.7332C11.7338 4.15765 11.7344 4.15765 11.7351 4.15765C11.7354 4.15765 11.7358 4.15765 11.7362 4.15765H14.3905L14.4732 4.15195C14.7707 4.11056 15 3.84905 15 3.53263C15 3.18744 14.7271 2.90761 14.3905 2.90761H11.7351L11.6417 2.90148C11.3354 2.861 11.0822 2.62393 11.0203 2.30653L10.8228 1.2934L10.7826 1.15865ZM9.92861 2.90761C9.90086 2.83704 9.87686 2.76434 9.85687 2.68973L9.82496 2.55174L9.63635 1.57733C9.59227 1.40826 9.45612 1.28449 9.29185 1.25618L9.2199 1.25005H5.77993C5.60892 1.25005 5.45691 1.35269 5.39377 1.48169L5.37235 1.53837L5.17483 2.55199C5.15073 2.6754 5.11583 2.79426 5.07126 2.90761H9.92861ZM13.3153 5.60015C13.6229 5.62558 13.8587 5.88097 13.875 6.18839L13.8671 6.35979L13.605 9.56916L13.3301 12.7011C13.2719 13.3264 13.2198 13.8538 13.1749 14.2689C13.0187 15.7156 12.0796 16.6103 10.6638 16.6368C8.45781 16.6775 6.33731 16.6771 4.2781 16.6326C2.90331 16.6037 1.97805 15.6994 1.82462 14.2748L1.71858 13.2251L1.53328 11.1892L1.34346 8.95506L1.12643 6.27324C1.09946 5.92916 1.34959 5.6278 1.68512 5.60014C1.99269 5.57478 2.26525 5.78821 2.32932 6.08899L2.35426 6.33479L2.55805 8.84894L2.78057 11.4549C2.88038 12.583 2.96695 13.496 3.03622 14.1373C3.12365 14.9492 3.55115 15.367 4.30343 15.3828C6.34654 15.427 8.45123 15.4274 10.6417 15.3869C11.4398 15.372 11.874 14.9583 11.9633 14.1311L12.0689 13.0872C12.0998 12.7654 12.1328 12.4102 12.1678 12.0244L12.3905 9.4615L12.6588 6.17293C12.6836 5.85752 12.9327 5.61576 13.2325 5.59902L13.3153 5.60015Z"
                                  fill="#3B3F45"
                                />
                              </svg>
                            </Button>
                          </Space>
                        </div>
                        {!isCollapse && (
                          <>
                            <Input.TextArea
                              placeholder={t(`Your question`)}
                              value={question}
                              onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                            />
                            {answers.map((ans, i) => {
                              const { content, active, id } = ans;
                              const update = updateAnswer(index, i);
                              return (
                                <div className="flex items-center" key={id}>
                                  <Input
                                    className="flex-1"
                                    placeholder={t(`Your answer`)}
                                    value={content}
                                    onChange={(e) => update('content', e.target.value)}
                                  />
                                  <Checkbox
                                    className="ml-[10px]"
                                    value={active}
                                    onChange={(e) => update('active', e.target.checked)}
                                  />
                                  <div
                                    onClick={() => removeAnswer(index, i)}
                                    className="ml-[10px] cursor-pointer">
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.621 17.73 20 14.34 20H5.67C2.28 20 0 17.621 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM13.0104 12.9996C13.3504 12.6606 13.3504 12.1106 13.0104 11.7706L11.2304 9.99059L13.0104 8.20959C13.3504 7.87059 13.3504 7.31059 13.0104 6.97059C12.6704 6.62959 12.1204 6.62959 11.7704 6.97059L10.0004 8.74959L8.22046 6.97059C7.87046 6.62959 7.32046 6.62959 6.98046 6.97059C6.64046 7.31059 6.64046 7.87059 6.98046 8.20959L8.76045 9.99059L6.98046 11.7606C6.64046 12.1106 6.64046 12.6606 6.98046 12.9996C7.15046 13.1696 7.38046 13.2606 7.60046 13.2606C7.83046 13.2606 8.05046 13.1696 8.22046 12.9996L10.0004 11.2306L11.7804 12.9996C11.9504 13.1806 12.1704 13.2606 12.3904 13.2606C12.6204 13.2606 12.8404 13.1696 13.0104 12.9996Z"
                                        fill="#BEC2C8"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              );
                            })}
                            <Button
                              onClick={() => addAnswer(index)}
                              className="btn-white text-primary">
                              <Space>
                                <svg
                                  width="17"
                                  height="18"
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.44167 0.666016H12.2167C15.05 0.666016 16.6667 2.26602 16.6667 5.10768V12.891C16.6667 15.716 15.0583 17.3327 12.225 17.3327H4.44167C1.6 17.3327 0 15.716 0 12.891V5.10768C0 2.26602 1.6 0.666016 4.44167 0.666016ZM9.01536 9.69115H11.382C11.7654 9.68281 12.0737 9.37448 12.0737 8.99115C12.0737 8.60781 11.7654 8.29948 11.382 8.29948H9.01536V5.94948C9.01536 5.56615 8.70703 5.25781 8.3237 5.25781C7.94036 5.25781 7.63203 5.56615 7.63203 5.94948V8.29948H5.2737C5.09036 8.29948 4.91536 8.37448 4.78203 8.49948C4.65703 8.63281 4.58203 8.80698 4.58203 8.99115C4.58203 9.37448 4.89036 9.68281 5.2737 9.69115H7.63203V12.0495C7.63203 12.4328 7.94036 12.7411 8.3237 12.7411C8.70703 12.7411 9.01536 12.4328 9.01536 12.0495V9.69115Z"
                                    fill="#E4948F"
                                  />
                                </svg>
                                {t(`Add answer`)}
                              </Space>
                            </Button>
                          </>
                        )}
                      </Space>
                    )}
                  </CardCollapse>
                );
              })}
              <Button onClick={addQuestion} className="btn-transparent">
                <Space>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.44167 0.666016H12.2167C15.05 0.666016 16.6667 2.26602 16.6667 5.10768V12.891C16.6667 15.716 15.0583 17.3327 12.225 17.3327H4.44167C1.6 17.3327 0 15.716 0 12.891V5.10768C0 2.26602 1.6 0.666016 4.44167 0.666016ZM9.01536 9.69115H11.382C11.7654 9.68281 12.0737 9.37448 12.0737 8.99115C12.0737 8.60781 11.7654 8.29948 11.382 8.29948H9.01536V5.94948C9.01536 5.56615 8.70703 5.25781 8.3237 5.25781C7.94036 5.25781 7.63203 5.56615 7.63203 5.94948V8.29948H5.2737C5.09036 8.29948 4.91536 8.37448 4.78203 8.49948C4.65703 8.63281 4.58203 8.80698 4.58203 8.99115C4.58203 9.37448 4.89036 9.68281 5.2737 9.69115H7.63203V12.0495C7.63203 12.4328 7.94036 12.7411 8.3237 12.7411C8.70703 12.7411 9.01536 12.4328 9.01536 12.0495V9.69115Z"
                      fill="#E4948F"
                    />
                  </svg>
                  {t(`Add Question`)}
                </Space>
              </Button>
            </Space>
          </Card>
        )}

        {typeMission === 'video' && (
          <Card>
            <Space direction="vertical" className="w-full" size={30}>
              {videos.map((item, index) => {
                const { title, link } = item;
                return (
                  <CardCollapse key={index} className="bg-[#F9F9F9]">
                    {({ isCollapse, setCollapse }) => (
                      <Space direction="vertical" className="w-full" size={30}>
                        <div className="flex justify-between">
                          <Space size={20}>
                            <div className="font-semibold">
                              {t(`Video `)}
                              {index + 1}
                            </div>
                          </Space>
                          <Space size={20}>
                            <Button
                              onClick={() => setCollapse((preValue) => !preValue)}
                              className="btn-white">
                              <svg
                                width="15"
                                height="10"
                                viewBox="0 0 15 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.650295 1.16983C1.14236 0.677766 1.94014 0.677766 2.4322 1.16983L7.42125 6.15887L12.4103 1.16983C12.9024 0.677766 13.7001 0.677766 14.1922 1.16983C14.6843 1.66189 14.6843 2.45967 14.1922 2.95174L8.3122 8.83173C7.82014 9.32379 7.02236 9.32379 6.53029 8.83173L0.650295 2.95174C0.158235 2.45967 0.158235 1.66189 0.650295 1.16983Z"
                                  fill="#3B3F45"
                                />
                              </svg>
                            </Button>
                            <Button onClick={() => removeVideo(index)} className="btn-white">
                              <svg
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.7826 1.15865C10.5436 0.455229 9.92288 0 9.2199 0H5.77993L5.64916 0.00527624C4.95767 0.0612443 4.36759 0.557471 4.18587 1.25444L3.97953 2.30678L3.95535 2.39941C3.85668 2.69898 3.58106 2.90703 3.26607 2.90761H0.609492L0.526787 2.91331C0.229294 2.9547 0 3.2162 0 3.53263C0 3.87782 0.272879 4.15765 0.609492 4.15765H3.26369C3.26405 4.15765 3.2644 4.15765 3.26476 4.15765C3.2654 4.15765 3.26604 4.15765 3.26668 4.15765H11.7332C11.7338 4.15765 11.7344 4.15765 11.7351 4.15765C11.7354 4.15765 11.7358 4.15765 11.7362 4.15765H14.3905L14.4732 4.15195C14.7707 4.11056 15 3.84905 15 3.53263C15 3.18744 14.7271 2.90761 14.3905 2.90761H11.7351L11.6417 2.90148C11.3354 2.861 11.0822 2.62393 11.0203 2.30653L10.8228 1.2934L10.7826 1.15865ZM9.92861 2.90761C9.90086 2.83704 9.87686 2.76434 9.85687 2.68973L9.82496 2.55174L9.63635 1.57733C9.59227 1.40826 9.45612 1.28449 9.29185 1.25618L9.2199 1.25005H5.77993C5.60892 1.25005 5.45691 1.35269 5.39377 1.48169L5.37235 1.53837L5.17483 2.55199C5.15073 2.6754 5.11583 2.79426 5.07126 2.90761H9.92861ZM13.3153 5.60015C13.6229 5.62558 13.8587 5.88097 13.875 6.18839L13.8671 6.35979L13.605 9.56916L13.3301 12.7011C13.2719 13.3264 13.2198 13.8538 13.1749 14.2689C13.0187 15.7156 12.0796 16.6103 10.6638 16.6368C8.45781 16.6775 6.33731 16.6771 4.2781 16.6326C2.90331 16.6037 1.97805 15.6994 1.82462 14.2748L1.71858 13.2251L1.53328 11.1892L1.34346 8.95506L1.12643 6.27324C1.09946 5.92916 1.34959 5.6278 1.68512 5.60014C1.99269 5.57478 2.26525 5.78821 2.32932 6.08899L2.35426 6.33479L2.55805 8.84894L2.78057 11.4549C2.88038 12.583 2.96695 13.496 3.03622 14.1373C3.12365 14.9492 3.55115 15.367 4.30343 15.3828C6.34654 15.427 8.45123 15.4274 10.6417 15.3869C11.4398 15.372 11.874 14.9583 11.9633 14.1311L12.0689 13.0872C12.0998 12.7654 12.1328 12.4102 12.1678 12.0244L12.3905 9.4615L12.6588 6.17293C12.6836 5.85752 12.9327 5.61576 13.2325 5.59902L13.3153 5.60015Z"
                                  fill="#3B3F45"
                                />
                              </svg>
                            </Button>
                          </Space>
                        </div>
                        {!isCollapse && (
                          <>
                            <Input
                              placeholder={t(`Add a title`)}
                              value={title}
                              onChange={(e) => updateVideo(index, 'title', e.target.value)}
                            />
                            <Input
                              placeholder={t(`Youtube Video Id`)}
                              value={link}
                              onChange={(e) => updateVideo(index, 'link', e.target.value)}
                            />
                            {link && (
                              <div className="flex justify-center">
                                {/*<Player>*/}
                                {/*  <source src={link} />*/}
                                {/*</Player>*/}
                                <div className="rounded-2xl w-min	overflow-hidden">
                                  <YouTube videoId={link} />
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </Space>
                    )}
                  </CardCollapse>
                );
              })}
              <Button onClick={addVideo} className="btn-transparent">
                <Space>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.44167 0.666016H12.2167C15.05 0.666016 16.6667 2.26602 16.6667 5.10768V12.891C16.6667 15.716 15.0583 17.3327 12.225 17.3327H4.44167C1.6 17.3327 0 15.716 0 12.891V5.10768C0 2.26602 1.6 0.666016 4.44167 0.666016ZM9.01536 9.69115H11.382C11.7654 9.68281 12.0737 9.37448 12.0737 8.99115C12.0737 8.60781 11.7654 8.29948 11.382 8.29948H9.01536V5.94948C9.01536 5.56615 8.70703 5.25781 8.3237 5.25781C7.94036 5.25781 7.63203 5.56615 7.63203 5.94948V8.29948H5.2737C5.09036 8.29948 4.91536 8.37448 4.78203 8.49948C4.65703 8.63281 4.58203 8.80698 4.58203 8.99115C4.58203 9.37448 4.89036 9.68281 5.2737 9.69115H7.63203V12.0495C7.63203 12.4328 7.94036 12.7411 8.3237 12.7411C8.70703 12.7411 9.01536 12.4328 9.01536 12.0495V9.69115Z"
                      fill="#E4948F"
                    />
                  </svg>
                  {t(`Add Video`)}
                </Space>
              </Button>
            </Space>
          </Card>
        )}

        {typeMission === 'task' && (
          <Card>
            <Space direction="vertical" className="w-full" size={30}>
              {tasks.map((item, index) => {
                const { isRequired, title, name, link } = item;
                return (
                  <CardCollapse key={index} className="bg-[#F9F9F9]">
                    {({ isCollapse, setCollapse }) => (
                      <Space direction="vertical" className="w-full" size={30}>
                        <div className="flex justify-between">
                          <Space size={20}>
                            <div className="font-semibold">
                              {t(`Task `)}
                              {index + 1}
                            </div>
                            <Select
                              className="min-w-[250px]"
                              onChange={(value) => updateTask(index, 'type', value)}
                              placeholder={t(`Select Type`)}
                              defaultValue="single">
                              {TYPE_QUESTION.map((item) => {
                                const { label, value } = item;
                                return <Select.Option value={value}>{label}</Select.Option>;
                              })}
                            </Select>
                            <Checkbox
                              value={isRequired}
                              onChange={(e) => updateTask(index, 'isRequired', e.target.checked)}>
                              {t(`Required`)}
                            </Checkbox>
                          </Space>
                          <Space size={20}>
                            <Button
                              onClick={() => setCollapse((preValue) => !preValue)}
                              className="btn-white">
                              <svg
                                width="15"
                                height="10"
                                viewBox="0 0 15 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.650295 1.16983C1.14236 0.677766 1.94014 0.677766 2.4322 1.16983L7.42125 6.15887L12.4103 1.16983C12.9024 0.677766 13.7001 0.677766 14.1922 1.16983C14.6843 1.66189 14.6843 2.45967 14.1922 2.95174L8.3122 8.83173C7.82014 9.32379 7.02236 9.32379 6.53029 8.83173L0.650295 2.95174C0.158235 2.45967 0.158235 1.66189 0.650295 1.16983Z"
                                  fill="#3B3F45"
                                />
                              </svg>
                            </Button>
                            <Button onClick={() => removeTask(index)} className="btn-white">
                              <svg
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10.7826 1.15865C10.5436 0.455229 9.92288 0 9.2199 0H5.77993L5.64916 0.00527624C4.95767 0.0612443 4.36759 0.557471 4.18587 1.25444L3.97953 2.30678L3.95535 2.39941C3.85668 2.69898 3.58106 2.90703 3.26607 2.90761H0.609492L0.526787 2.91331C0.229294 2.9547 0 3.2162 0 3.53263C0 3.87782 0.272879 4.15765 0.609492 4.15765H3.26369C3.26405 4.15765 3.2644 4.15765 3.26476 4.15765C3.2654 4.15765 3.26604 4.15765 3.26668 4.15765H11.7332C11.7338 4.15765 11.7344 4.15765 11.7351 4.15765C11.7354 4.15765 11.7358 4.15765 11.7362 4.15765H14.3905L14.4732 4.15195C14.7707 4.11056 15 3.84905 15 3.53263C15 3.18744 14.7271 2.90761 14.3905 2.90761H11.7351L11.6417 2.90148C11.3354 2.861 11.0822 2.62393 11.0203 2.30653L10.8228 1.2934L10.7826 1.15865ZM9.92861 2.90761C9.90086 2.83704 9.87686 2.76434 9.85687 2.68973L9.82496 2.55174L9.63635 1.57733C9.59227 1.40826 9.45612 1.28449 9.29185 1.25618L9.2199 1.25005H5.77993C5.60892 1.25005 5.45691 1.35269 5.39377 1.48169L5.37235 1.53837L5.17483 2.55199C5.15073 2.6754 5.11583 2.79426 5.07126 2.90761H9.92861ZM13.3153 5.60015C13.6229 5.62558 13.8587 5.88097 13.875 6.18839L13.8671 6.35979L13.605 9.56916L13.3301 12.7011C13.2719 13.3264 13.2198 13.8538 13.1749 14.2689C13.0187 15.7156 12.0796 16.6103 10.6638 16.6368C8.45781 16.6775 6.33731 16.6771 4.2781 16.6326C2.90331 16.6037 1.97805 15.6994 1.82462 14.2748L1.71858 13.2251L1.53328 11.1892L1.34346 8.95506L1.12643 6.27324C1.09946 5.92916 1.34959 5.6278 1.68512 5.60014C1.99269 5.57478 2.26525 5.78821 2.32932 6.08899L2.35426 6.33479L2.55805 8.84894L2.78057 11.4549C2.88038 12.583 2.96695 13.496 3.03622 14.1373C3.12365 14.9492 3.55115 15.367 4.30343 15.3828C6.34654 15.427 8.45123 15.4274 10.6417 15.3869C11.4398 15.372 11.874 14.9583 11.9633 14.1311L12.0689 13.0872C12.0998 12.7654 12.1328 12.4102 12.1678 12.0244L12.3905 9.4615L12.6588 6.17293C12.6836 5.85752 12.9327 5.61576 13.2325 5.59902L13.3153 5.60015Z"
                                  fill="#3B3F45"
                                />
                              </svg>
                            </Button>
                          </Space>
                        </div>
                        {!isCollapse && (
                          <>
                            <Input
                              placeholder={t(`Your Task`)}
                              value={title}
                              onChange={(e) => updateTask(index, 'title', e.target.value)}
                            />
                            <Input
                              placeholder={t(`Your name`)}
                              value={name}
                              onChange={(e) => updateTask(index, 'name', e.target.value)}
                            />
                            <Input
                              placeholder={t(`Pask Link`)}
                              value={link}
                              onChange={(e) => updateTask(index, 'link', e.target.value)}
                            />
                          </>
                        )}
                      </Space>
                    )}
                  </CardCollapse>
                );
              })}
              <Button onClick={addTask} className="btn-transparent">
                <Space>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.44167 0.666016H12.2167C15.05 0.666016 16.6667 2.26602 16.6667 5.10768V12.891C16.6667 15.716 15.0583 17.3327 12.225 17.3327H4.44167C1.6 17.3327 0 15.716 0 12.891V5.10768C0 2.26602 1.6 0.666016 4.44167 0.666016ZM9.01536 9.69115H11.382C11.7654 9.68281 12.0737 9.37448 12.0737 8.99115C12.0737 8.60781 11.7654 8.29948 11.382 8.29948H9.01536V5.94948C9.01536 5.56615 8.70703 5.25781 8.3237 5.25781C7.94036 5.25781 7.63203 5.56615 7.63203 5.94948V8.29948H5.2737C5.09036 8.29948 4.91536 8.37448 4.78203 8.49948C4.65703 8.63281 4.58203 8.80698 4.58203 8.99115C4.58203 9.37448 4.89036 9.68281 5.2737 9.69115H7.63203V12.0495C7.63203 12.4328 7.94036 12.7411 8.3237 12.7411C8.70703 12.7411 9.01536 12.4328 9.01536 12.0495V9.69115Z"
                      fill="#E4948F"
                    />
                  </svg>
                  {t(`Add Task`)}
                </Space>
              </Button>
            </Space>
          </Card>
        )}
        <div className="flex justify-between items-center">
          <Button onClick={() => {}}>{t(`Cancel`)}</Button>
          <Button onClick={() => {}} type="primary">
            {t(`Publish`)}
          </Button>
        </div>
      </Space>
      <div className="mb-[30px]" />
    </LayoutContainer>
  );
};

CreateMission.propTypes = {};

export default memo(CreateMission);
