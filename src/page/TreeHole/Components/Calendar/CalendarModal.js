import React, {Component, useState, useEffect} from 'react';
import {Modal, message, Input, Button, Tooltip, List, Radio, Select} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import CalendarModalInput from './CalendarModalInput';
import CalendarModalList from './CalendarModalList';

const {Option} = Select;

const CalendarModal = props => {

    const [contentInputValueList, setContentInputValueList] = useState([]);
    const [isShowAdd, setIsShowAdd] = useState(true);
    const [selectValue, setSelectValue] = useState('Rose');

    // 点击Modal  OK button
    const handleOk = () => {
        const {nowYear, nowMonth, nowDay, totleValue, changeIsModalVisible} = props;
        changeIsModalVisible();
        contentInputValueList.map(item => {
            if (item.split(' ').join('').length !== 0) {
                totleValue[nowYear][nowMonth][nowDay] = JSON.parse(JSON.stringify(
                    [{type: selectValue === 'Jack' ? 'success' : 'warning', content: item}, ...totleValue[nowYear][nowMonth][nowDay]]
                ));
            }
        });
        setContentInputValueList([]);
    };

    // 点击Modal  cancel button
    const handleCancel = () => {
        props.changeIsModalVisible();
        setContentInputValueList([]);
    };

    // modal内事件函数
    const clickShowAdd = () => {
        setIsShowAdd(!isShowAdd);
    };

    const handleChangeSelect = value => {
        console.log(`${value}`);
        setSelectValue(value);
    };

    const {isModalVisible, nowYear, nowMonth, nowDay, totleValue} = props;
    // Modal head
    const modalTitle = (
        <span>
            {nowYear + '-' + nowMonth + '-' + nowDay}&nbsp;
            <Tooltip title="输入文字后需要点击OK才能添加成功喔！！！(列表为暂存区，可一次添加多条后再点击OK，Cancel可取消添加 (*^_^*))">
                <QuestionCircleOutlined style={{cursor: 'pointer'}} />
            </Tooltip>
        </span>
    );
    return (
        <Modal title={modalTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} maskClosable={false}>
            <div>
                <Radio.Group defaultValue={isShowAdd ? 'add' : 'view'} buttonStyle="solid" onChange={clickShowAdd}>
                    <Radio.Button value='add'>添加今日事件</Radio.Button>
                    <Radio.Button value='view'>查看今日事件</Radio.Button>
                </Radio.Group>&nbsp;
                <Select defaultValue="Rose" style={{width: 120}} onChange={handleChangeSelect}>
                    <Option value="Jack">启鹏</Option>
                    <Option value="Rose">赛男</Option>
                </Select>
                {
                    isShowAdd ? <CalendarModalInput
                        contentInputValueList={contentInputValueList}
                        setContentInputValueList={setContentInputValueList}
                    /> : <CalendarModalList
                        totleValue={totleValue}
                        nowYear={nowYear}
                        nowMonth={nowMonth}
                        nowDay={nowDay}
                    />
                }
            </div>
        </Modal>
    );
};

export default CalendarModal;