import React, {Component, useState} from 'react';
import {Input, List, message} from 'antd';

const CalendarModalInput = props => {

    const [contentInputValue, setContentInputValue] = useState('');

    const {contentInputValueList, setContentInputValueList} = props;

    // 添加输入框数据到表单
    const handleContentBtnChange = e => {
        // console.log(e);
        // 判定输入的字符串是否全是空格
        if (contentInputValue.split(' ').join('').length !== 0) {
            setContentInputValueList([JSON.parse(JSON.stringify(contentInputValue)), ...contentInputValueList]);
            setContentInputValue('');
            message.info('添加成功');
        }
        else {
            setContentInputValue('');
            message.info('不可输入空格');
        }
    };
    // 绑定回车键时间：添加输入框数据到表单
    const contentBoardKey = e => {
        if (e.nativeEvent.keyCode === 13) {
            handleContentBtnChange();
        }
    };

    // 修改input框 显示输入内容
    const handleContentInputChange = e => {
        setContentInputValue(e.target.value);
    };

    return (
        <div>
            <Input
                style={{margin: 'auto', marginTop: 8}}
                placeholder='输入今天的话，回车提交'
                value={contentInputValue}
                onChange={handleContentInputChange}
                onKeyPress={contentBoardKey}
            />
            <List
                style={{margin: 'auto', marginTop: 8}}
                bordered
                dataSource={contentInputValueList}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </div>
    );
};

export default CalendarModalInput;