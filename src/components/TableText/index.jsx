import React from "react";
import {Typography} from "antd";
const { Text } = Typography;

const TbText = ({className,classNameText, text}) => {
    return (
        <div className={`flex justify-center ${className}`}><Text className={`!text-sm !font-semibold ${classNameText}`}> {text}</Text></div>
    )
}
export default TbText;