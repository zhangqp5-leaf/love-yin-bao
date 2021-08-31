import React, {Component, useState, Fragment} from 'react';
import {Calendar, Badge} from 'antd';
import {connect} from 'react-redux';
import totleValueJson from '../../data/totleValue.json';
import CalendarModal from './CalendarModal';

import styles from './Calendar.module.less';

let totleValue = totleValueJson;

function getListData(value) {
    let listData;
    switch (value.year()) {
        case 2021:
            for (var i = 1; i <= 12; i++) {
                switch (value.month() + 1) {
                    case i:
                        for (var j = 1; j <= 31; j++) {
                            switch (value.date()) {
                                case j:
                                    listData = totleValue[2021][i][j];
                                default:
                                    break;
                            }
                        };
                    default:
                        break;
                }
            }
            break;
        default:
            break;
    }
    return listData || [];
}

function dateCellRender(value) {
    const listData = getListData(value);
    return (
        <div>
            <ul className={styles.events}>
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function getMonthData(value) {
    if (value.month() === 8) {
        return 1394;
    }
}

function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
        <div className={styles.notesMonth}>
            <section>{num}</section>
            <span>Backlog number</span>
        </div>
    ) : null;
}

const CalendarInfo = props => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [nowYear, setNowYear] = useState(2021);
    const [nowMonth, setNowMonth] = useState(1);
    const [nowDay, setNowDay] = useState(1);

    const changeIsModalVisible = () => {
        setIsModalVisible(!isModalVisible);
    };

    const onSelect = e => {
        // message.info(`点击了时间${e.date()}`);
        setIsModalVisible(true);
        setNowYear(e.year());
        setNowMonth(e.month() + 1);
        setNowDay(e.date());
    };

    const {windowHeight} = props;
    return (
        <div>
            <Calendar
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}
                onSelect={onSelect}
                style={{position: 'absolute', bottom: windowHeight / 4, top: 0, overflowY: 'auto'}}
            />
            <CalendarModal
                isModalVisible={isModalVisible}
                nowYear={nowYear}
                nowMonth={nowMonth}
                nowDay={nowDay}
                totleValue={totleValue}
                changeIsModalVisible={changeIsModalVisible}
            />
        </div>
    );
};

export default connect(
    state => ({
        windowHeight: state.main.windowHeight,
    }),
    {}
)(CalendarInfo);