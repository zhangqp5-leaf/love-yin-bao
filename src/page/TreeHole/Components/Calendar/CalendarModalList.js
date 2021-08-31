import React, {Component, useState} from 'react';
import {List} from 'antd';

const CalendarModalList = props => {

    const {totleValue, nowYear, nowMonth, nowDay} = props;
    // modal内查看今日事件处数据
    let modalList = [];
    if (totleValue[nowYear][nowMonth][nowDay].length > 0) {
        for (let i = 0; i < totleValue[nowYear][nowMonth][nowDay].length; i++) {
            modalList = [
                ...modalList,
                '【' + (JSON.parse(JSON.stringify(totleValue[nowYear][nowMonth][nowDay][i].type)) === 'success' ? '启鹏' : '赛男')
                    + '】 ' + JSON.parse(JSON.stringify(totleValue[nowYear][nowMonth][nowDay][i].content)),
            ];
        }
    }

    return (
        <div>
            <List
                style={{margin: 'auto', marginTop: 8}}
                bordered
                dataSource={modalList}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </div>
    );
};

export default CalendarModalList;