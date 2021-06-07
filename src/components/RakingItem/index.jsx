import React from 'react';
import {Avatar, Typography} from 'antd';
import "./RankingItem.scss";
import {ReactComponent as TriangleUp} from '../../assets/svgs/triangleUp.svg';
import {ReactComponent as TriangleDown} from '../../assets/svgs/triangleDown.svg';


const {Text} = Typography;
const RakingItem = React.memo(({
                                   avatar='https://i.pravatar.cc/300'
                                   , name = '@sssaName', score = Math.floor(Math.random() * 5000), position = '4', isUp = false, ...rest}) => {
    return (
        <div className="flex-row flex items-center">
            <div className="flex flex-col justify-center items-center mr-1 min-w-[10px]">
                <Text type="default" className={'text-[14px]'}>{position}</Text>
                {isUp ? <TriangleUp/> : <TriangleDown/>}
            </div>
            <div className="ranking-item bg-gray dark:bg-[#232A37] rounded-full items-center px-0.5 ">
                <Avatar size={50} src={avatar}/>
                <Text className="name mr-5 w-[70px]" ellipsis>{name}</Text>
                <span className="name primary-color w-[50px]" >{score}</span>
            </div>
        </div>
    )
});

export default RakingItem;

