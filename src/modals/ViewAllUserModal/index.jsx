import {closeModal, useModal} from '@doopage/use-modal';
import {Avatar, Form, Input, List, Modal, Space, Spin, Typography} from 'antd';

import React, {memo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ModalName} from 'utils/constants';
import {ReactComponent as ShieldDone} from 'assets/svgs/shieldDone.svg';
import InfiniteScroll from 'react-infinite-scroller';

import './ViewAllUserModal.scss';
import Search from "assets/svgr/Search";

const modalName = ModalName.viewAllUserModal;
const {Title, Text} = Typography;
const dataS =  Array(20)
    .fill(0)
    .map((_, index) => index);
const ViewAllUserModal = () => {
    const {t} = useTranslation();
    const [form] = Form.useForm();
    const [state, setState] = useState({
        dataSource: [...dataS],
        loading: false,
        hasMore: true
    });

    const {open, data} = useModal(modalName);

    const handleOk = () => {
        closeModal(modalName);
    };

    const handleCancel = () => {
        closeModal(modalName);
    };
    const handleInfiniteOnLoad = () => {
        setState(prevState => ({...prevState, hasMore: true, loading: true}))
        setTimeout(() => {
            setState(prevState => ({
                ...prevState,
                hasMore: true,
                loading: false,
                dataSource: [...prevState.dataSource, ...dataS]
            }))
        }, 500)
    };
    const onSearch = (e) => {
        if(e.target.value?.length > 0){
            const d = state.dataSource.filter((item) => item?.name?.includes( e.target.value))
            setState(prevState => ({...prevState, dataSource: d}))
        } else {
            setState(prevState => ({...prevState, dataSource: dataS}))
        }

    }
    return (
        <Modal
            title={data?.title ?? ''}
            visible={open}
            onCancel={handleCancel}
            className="w-[500px] max-h-[620px]"
            bodyStyle={{justifyContent: 'center'}}
            onOk={handleOk}
            destroyOnClose
            footer={null}>
            <Input
                className="w-[440px] h-[42px]"
                placeholder={t(`Search`)}
                prefix={<Search/>}
                type="search"
                onChange={onSearch}
            />
            <div className={'mt-[30px] max-h-[550px] overflow-auto'}>

                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={handleInfiniteOnLoad}
                    hasMore={!state.loading && state.hasMore}
                    useWindow={false}
                >
                    <List

                        grid={{gutter: 16, column: 2}}
                        dataSource={state.dataSource}
                        loadMore={true}
                        renderItem={item => (
                            <List.Item>
                                <Space className={'flex flex-row items-center'}>
                                    <div className={'relative'}>
                                        <Avatar size={40} src={'https://i.pravatar.cc/302'}/>
                                        <div className={'absolute top-0 right-0'}>
                                            <ShieldDone fill={'#ffffff'}/>
                                        </div>
                                    </div>

                                    <div className={'flex flex-col'}>
                                        <Text className="w-[200px]" ellipsis>{'User Name'}</Text>
                                        <Text className="text-[12px] text-[#605D68] font-normal w-[70px]"
                                              ellipsis>{'@avc'}</Text>
                                    </div>
                                </Space>
                            </List.Item>
                        )}
                    />
                    {state.loading && state.hasMore && (
                        <div className="mt-[30px] w-full text-center">
                            <Spin/>
                        </div>
                    )}
                </InfiniteScroll>
            </div>
        </Modal>
    );
};

export default memo(ViewAllUserModal);
