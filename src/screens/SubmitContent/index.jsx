import { Breadcrumb, Button, Card, Input, Select, Space, Upload } from 'antd';
import LayoutContainer from 'components/LayoutContainer';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { Link } from 'react-router-dom';

const toolbarOptions = [
  [{ font: [] }, { size: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ script: 'super' }, { script: 'sub' }],
  [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['direction', { align: [] }],
  ['link', 'image', 'video', 'formula'],
  ['clean'],
];

const SubmitContent = (props) => {
  const { t } = useTranslation();
  const [editors, setEditors] = useState([{ title: '', content: '' }]);

  const category = [{ value: '1', label: t(`this is label`) }];

  const handleSelectCate = (value) => {
    console.log('select value ', value);
  };

  const handleChangeEditor = (index, key, value) => {
    setEditors((items) => {
      let newItems = [...items];
      newItems[index] = { ...newItems[index], [key]: value };
      return newItems;
    });
  };

  const handleAddEditor = () => {
    setEditors((items) => {
      return [...items, { title: '', content: '' }];
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
          <Breadcrumb.Item>{t(`Submit Content`)}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Space size={30} direction="vertical">
        <Card>
          <div className="flex justify-between">
            <Space size={20}>
              <div className="text-[20px] font-semibold">{t(`Create a New Note`)}</div>
              <Select onChange={handleSelectCate} placeholder={t(`Select category`)}>
                {category.map((item) => {
                  const { label, value } = item;
                  return <Select.Option value={value}>{label}</Select.Option>;
                })}
              </Select>
              <Select onChange={handleSelectCate} placeholder={t(`Select sub category`)}>
                {category.map((item) => {
                  const { label, value } = item;
                  return <Select.Option value={value}>{label}</Select.Option>;
                })}
              </Select>
            </Space>
            <Button onClick={() => {}} className="btn-transparent">
              {t(`See Drafts`)}
            </Button>
          </div>
        </Card>
        <Card>
          <Input placeholder={t(`Add a title`)} />
        </Card>
        <Card>
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
        </Card>
        {editors.map((item, index) => {
          const { title, content } = item;
          return (
            <Card>
              <Space direction="vertical" className="w-full cursor-pointer" size={30}>
                <Space direction="vertical" className="w-full" size={20} key={index}>
                  <Input
                    placeholder={t(`Add a title`)}
                    value={title}
                    onChange={(e) => handleChangeEditor(index, 'title', e.target.value)}
                  />
                  <ReactQuill
                    modules={{
                      toolbar: toolbarOptions,
                    }}
                    value={content}
                    onChange={(value) => handleChangeEditor(index, 'content', value)}
                    className="ant-input"
                  />
                </Space>
              </Space>
            </Card>
          );
        })}
        <div className="flex justify-between items-center">
          <Space size={20}>
            <div onClick={handleAddEditor}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="42" height="42" rx="12" fill="#E4948F" />
                <path
                  d="M27.8675 22.5524H22.5543V27.8468C22.5543 28.7074 21.8621 29.3996 21.0016 29.3996C20.141 29.3996 19.4488 28.7074 19.4488 27.8468V22.5524H14.1543C13.2938 22.5337 12.6016 21.8415 12.6016 20.9809C12.6016 20.5674 12.7699 20.1764 13.0506 19.8771C13.3499 19.5965 13.7428 19.4281 14.1543 19.4281H19.4488V14.1524C19.4488 13.2918 20.141 12.5996 21.0016 12.5996C21.8621 12.5996 22.5543 13.2918 22.5543 14.1524V19.4281H27.8675C28.7281 19.4281 29.4203 20.1203 29.4203 20.9809C29.4203 21.8415 28.7281 22.5337 27.8675 22.5524Z"
                  fill="white"
                />
              </svg>
            </div>
            <Button onClick={() => {}}>{t(`Cancel`)}</Button>
          </Space>
          <Space>
            <Button onClick={() => {}}>{t(`See Drafts`)}</Button>
            <Button onClick={() => {}} type="primary">
              {t(`Publish`)}
            </Button>
          </Space>
        </div>
      </Space>
      <div className="mb-[30px]" />
    </LayoutContainer>
  );
};

SubmitContent.propTypes = {
  exProps: PropTypes.bool,
};

export default memo(SubmitContent);
