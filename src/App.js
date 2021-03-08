import React, {Component} from 'react';
import {Button} from 'antd';
import {CSSTransition} from 'react-transition-group';

import styles from './App.module.less';
import './App.css';
import Background1 from './img/1037400.png';
import Background2 from './img/wallhaven-g85vp3.jpg';
import Background3 from './img/1033113.png';
import Background4 from './img/499590.jpg';
import Background5 from './img/501188.jpg';
import Background6 from './img/2032006.jpg';
import Background7 from './img/微信图片_20200728103045.jpg';
import Background8 from './img/微信图片_20200728103054.jpg';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isShowBackground: false,
            Background: Background2,
            backgroundList: [Background1, Background2, Background3, Background4, Background5, Background6, Background7, Background8],
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
            // Background: this.state.Background,
            backgroundList: [...this.state.backgroundList, BackgroundCopy],
            isShowBackground: !this.state.isShowBackground,
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
        // console.log(this.state.isShowBackground);
        return (
            <div>
                <CSSTransition
                    in={this.state.isShowBackground}
                    timeout={500}
                    classNames='fade'
                    onEntered={() => {this.setState({
                        isShowBackground: !this.state.isShowBackground,
                    });}}
                >
                    <div style={sectionStyle}></div>
                </CSSTransition>
                <div className={styles.container}>
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
                        <Button onClick={this.handleClickChangeBackground}>爱我你就点点我</Button>
                    </div>
                </div>
            </div>
        );
    }
}
