import React, {Component, useState, Fragment} from 'react';
import {Calendar, Badge, Modal, message, Input, Button} from 'antd';
import {connect} from 'react-redux';

import styles from './Calendar.module.less';

let totleValue = {
    2021: {
        1: {
            1: [
                {type: 'warning', content: 'This is warning event.'},
                {type: 'success', content: 'This is usual event.'},
            ],
            2: [
                {type: 'warning', content: 'This is warning event.'},
                {type: 'success', content: 'This is usual event.'},
            ],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        2: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        3: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        4: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [
                {type: 'warning', content: 'This is warning event.'},
                {type: 'success', content: 'This is usual event.'},
            ],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [
                {type: 'warning', content: 'This is warning event'},
                {type: 'success', content: 'This is very long usual event。。....'},
                {type: 'error', content: 'This is error event 1.'},
                {type: 'error', content: 'This is error event 2.'},
                {type: 'error', content: 'This is error event 3.'},
                {type: 'error', content: 'This is error event 4.'},
            ],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        5: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        6: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        7: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        8: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        9: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        10: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        11: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
        12: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
            29: [],
            30: [],
            31: [],
        },
    },
};

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
                                    // break;
                                default:
                                    break;
                            }
                            // break;
                        };
                        // break;
                    default:
                        break;
                }
            }
            // console.log(listData);
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



class CalendarInfo extends Component {

    state = {
        isModalVisible: false,
        contentInputValue: '',
        contentInputValueList: '',
        nowYear: 0,
        nowMonth: 0,
        nowDay: 0,
    }

    handleOk = () => {
        const {nowYear, nowMonth, nowDay, contentInputValueList} = this.state;
        this.setState({
            isModalVisible: false,
        });
        if (contentInputValueList.split(' ').join('').length !== 0) {
            totleValue[nowYear][nowMonth][nowDay] = JSON.parse(JSON.stringify(
                [{type: 'success', content: contentInputValueList}, ...totleValue[nowYear][nowMonth][nowDay]]
            ));
        }
        // totleValue[nowYear][nowMonth + 1][nowDay] = JSON.parse(JSON.stringify(
        //     [{type: 'success', content: contentInputValueList}, ...totleValue[nowYear][nowMonth + 1][nowDay]]
        // ));
        this.setState({
            contentInputValueList: '',
        });
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false,
            contentInputValueList: '',
        });
    }

    onSelect = e => {
        // message.info(`点击了时间${e.date()}`);
        this.setState({
            isModalVisible: true,
            nowYear: e.year(),
            nowMonth: e.month() + 1,
            nowDay: e.date(),
        });
        // console.log(e.year());
    }

    handleContentInputChange = e => {
        this.setState({
            contentInputValue: e.target.value,
        });
    }

    // 添加输入框数据到表单
    handleContentBtnChange = e => {
        const {contentInputValue, contentInputValueList} = this.state;
        // console.log(e);
        // 判定输入的字符串是否全是空格
        if (contentInputValue.split(' ').join('').length !== 0) {
            this.setState({
                contentInputValueList: JSON.parse(JSON.stringify(contentInputValue)),
                contentInputValue: '',
            });
            message.info('添加成功');
        }
        else {
            this.setState({
                contentInputValue: '',
            });
            message.info('不可输入空格');
        }
    }
    // 绑定回车键时间：添加输入框数据到表单
    contentBoardKey = e => {
        if (e.nativeEvent.keyCode === 13) {
            this.handleContentBtnChange();
        }
    }

    render() {
        const {isModalVisible, contentInputValue} = this.state;
        const {windowHeight} = this.props;
        const windowHeightCalendar = (3 * windowHeight) / 4;
        // console.log(totleValue[2021][])
        return (
            <Fragment>
                <Calendar
                    dateCellRender={dateCellRender}
                    monthCellRender={monthCellRender}
                    onSelect={this.onSelect}
                    style={{position: 'absolute', bottom: windowHeight / 4, top: 0, overflowY: 'auto'}}
                />
                <Modal title="Basic Modal" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <div>
                        <Input
                            placeholder='输入今天的话，回车提交'
                            value={contentInputValue}
                            onChange={this.handleContentInputChange}
                            onKeyPress={this.contentBoardKey}
                        />
                        {/* <Button onClick={this.handleContentBtnChange} style={{display: 'inline-block'}}>提交</Button> */}
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default connect(
    state => ({
        windowHeight: state.WindowHeight,
    }),
    {}
)(CalendarInfo);