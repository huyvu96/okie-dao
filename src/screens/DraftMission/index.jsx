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

const DraftMission = () => {
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
      </Space>
      <div className="mb-[30px]" />
    </LayoutContainer>
  );
};

DraftMission.propTypes = {};

export default memo(DraftMission);
