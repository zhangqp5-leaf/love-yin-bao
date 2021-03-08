import React, {Component} from 'react';
import {Button} from 'antd';

import styles from './App.module.less';
import Background1 from './img/1037400.png';
import Background2 from './img/wallhaven-g85vp3.jpg';
import Background3 from './img/1033113.png';
import Background4 from './img/499590.jpg';
import Background5 from './img/501188.jpg';

// const backgroundList = [Background1, Background2, Background3, Background4, Background5];

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            Background: Background2,
            backgroundList: [Background1, Background2, Background3, Background4, Background5],
        };
        this.handleClickChangeBackground = this.handleClickChangeBackground.bind(this);
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

    handleClickChangeBackground() {
        for (var i = 0; i < this.state.backgroundList.length; i++) {
            if (this.state.backgroundList[i] === this.state.Background) {
                this.setState({
                    backgroundList: this.state.backgroundList.splice(i, 1),
                });
            }
        };
        let BackgroundCopy = this.state.Background;
        this.setState({
            Background: this.state.backgroundList[Math.floor(Math.random() * this.state.backgroundList.length)],
            backgroundList: [...this.state.backgroundList, BackgroundCopy],
        });
    }

    render() {
        const sectionStyle = {
            width: '100%',
            height: '940px',
            backgroundImage: `url(${this.state.Background})`,
        };
        let startTime = new Date(2021, 1, 11, 23, 58);
        let endTime = new Date();
        let leftTime = endTime.getTime() - startTime.getTime();
        let leftSecond = parseInt(leftTime / 1000);
        let day1 = Math.floor(leftSecond / (60 * 60 * 24));
        let hour1 = Math.floor((leftSecond - day1 * 24 * 60 * 60) / 3600);
        let minute1 = Math.floor((leftSecond - day1 * 24 * 60 * 60 - hour1 * 3600) / 60);
        let second1 = Math.floor(leftSecond - day1 * 24 * 60 * 60 - hour1 * 3600 - minute1 * 60);
        // console.log(day1)
        // console.log(this.state.backgroundList);
        // console.log(this.state.Background);
        return (
            <div className={styles.container} style={sectionStyle}>
                <div className={styles.appTotleStyle}>
                    <div className={styles.appTextStyle}>
                        <div style={{display: 'inline-block', fontSize: '100%'}}>和尹宝在一起</div>
                        <div style={{display: 'inline-block', fontSize: '100%'}}>已经</div>
                    </div>
                    <div className={styles.appTimeStyle}>
                        <div style={{display: 'inline-block', fontSize: '100%'}}>{day1}</div>
                        <div style={{display: 'inline-block', fontSize: '35%'}}>天</div>
                        <div style={{display: 'inline-block', fontSize: '100%'}}>{hour1}</div>
                        <div style={{display: 'inline-block', fontSize: '35%'}}>小时</div>
                        <div style={{display: 'inline-block', fontSize: '100%'}}>{minute1}</div>
                        <div style={{display: 'inline-block', fontSize: '35%'}}>分钟</div>
                    </div>
                    <div className={styles.appSecondStyle}>
                        <div style={{display: 'inline-block', fontSize: '100%'}}>{second1}</div>
                        <div style={{display: 'inline-block', fontSize: '35%'}}>秒</div>
                    </div>
                    <Button onClick={this.handleClickChangeBackground}>点我</Button>
                </div>
            </div>
        );
    }
}
