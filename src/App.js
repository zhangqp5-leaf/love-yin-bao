import React, {Component} from 'react';

import styles from './App.module.less';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }



    render() {
        let startTime = new Date(2021, 1, 11, 23, 58);
        let endTime = new Date();
        let leftTime = endTime.getTime() - startTime.getTime();
        let leftSecond = parseInt(leftTime / 1000);
        let day1 = Math.floor(leftSecond / (60 * 60 * 24));
        let hour1 = Math.floor((leftSecond - day1 * 24 * 60 * 60) / 3600);
        let minute1 = Math.floor((leftSecond - day1 * 24 * 60 * 60 - hour1 * 3600) / 60);
        let second1 = Math.floor(leftSecond - day1 * 24 * 60 * 60 - hour1 * 3600 - minute1 * 60);
        // console.log(day1)
        return (
            <div>
                <div className={styles.appTextStyle}>
                    {/* 和尹宝在一起已经 */}
                    <p style={{display: 'inline-block', fontSize: '100%'}}>和尹宝在一起已经</p>
                </div>
                <div className={styles.appTimeStyle}>
                    {/* {day1} 天 {hour1} 小时 {minute1} 分钟 */}
                    <p style={{display: 'inline-block', fontSize: '100%'}}>{day1}</p>
                    <p style={{display: 'inline-block', fontSize: '35%'}}>天</p>
                    <p style={{display: 'inline-block', fontSize: '100%'}}>{hour1}</p>
                    <p style={{display: 'inline-block', fontSize: '35%'}}>小时</p>
                    <p style={{display: 'inline-block', fontSize: '100%'}}>{minute1}</p>
                    <p style={{display: 'inline-block', fontSize: '35%'}}>分钟</p>
                </div>
                <div className={styles.appSecondStyle}>
                    <p style={{display: 'inline-block', fontSize: '100%'}}>{second1}</p>
                    <p style={{display: 'inline-block', fontSize: '35%'}}>秒</p>
                </div>
            </div>
        );
    }
}
