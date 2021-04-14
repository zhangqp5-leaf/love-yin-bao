import React, {Component, Fragment} from 'react';
import {Button, Input, List} from 'antd';
import {CSSTransition} from 'react-transition-group';
import StopWatch from './Components/StopWatch/StopWatch';
import Music from './Components/Music/Music';
import Photo from './Components/Photo/Photo';
import Dialog from './Components/Dialog/Dialog';
import {
    Link,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeWindowHeight} from '../../Redux/Actions/WindowHeight';

import styles from './Index.module.less';
import './Index.css';
import Background1 from './img/1037400.png';
import Background2 from './img/wallhaven-g85vp3.jpg';
import Background3 from './img/1033113.png';
import Background4 from './img/499590.jpg';
import Background5 from './img/501188.jpg';
import Background6 from './img/2032006.jpg';
import Background7 from './img/微信图片_20200728103045.jpg';
import Background8 from './img/微信图片_20200728103054.jpg';

import Rabbit from './img/Rabbit.png';

import messageBoardData from './data/messageBoard.json';


class Main extends Component {

    state = {
        isShowBackground: false,
        Background: Background2,
        backgroundList: [Background1, Background2, Background3, Background4, Background5, Background6, Background7, Background8],
        messageBoardInputvalue: '',
        messageBoardList: [],
    };

    componentDidMount() {
        // 读取json文件数据
        this.setState({
            messageBoardList: messageBoardData,
        });
        this.screenChange();
    }
    // 背景图监听窗体改变事件
    screenChange = () => {
        window.addEventListener('resize', this.resize);
    }

    resize = () => {
        this.props.changeWindowHeight(document.body.clientHeight);
    }

    // 切换背景图片事件
    handleClickChangeBackground = () => {
        const {backgroundList, Background} = this.state;
        let backgroundListCopy = JSON.parse(JSON.stringify(backgroundList));
        for (var i = 0; i < backgroundListCopy.length; i++) {
            if (backgroundListCopy[i] === Background) {
                backgroundListCopy.splice(i, 1);
            }
        };
        this.setState({
            Background: backgroundListCopy[Math.floor(Math.random() * backgroundListCopy.length)],
            isShowBackground: !this.state.isShowBackground,
        });
    }
    // 输入框数据传到代码字符串
    handleMessageInputChange = e => {
        this.setState({
            messageBoardInputvalue: e.target.value,
        });
    }
    // 添加输入框数据到表单
    handleMessageBtnChange = () => {
        // 判定输入的字符串是否全是空格
        if (this.state.messageBoardInputvalue.split(' ').join('').length !== 0) {
            this.setState({
                messageBoardList: [this.state.messageBoardInputvalue, ...this.state.messageBoardList],
                messageBoardInputvalue: '',
            });
        }
        else {
            this.setState({
                messageBoardInputvalue: '',
            });
        }
    }
    // 绑定回车键时间：添加输入框数据到表单
    messageBoardKey = e => {
        if (e.nativeEvent.keyCode === 13) {
            this.handleMessageBtnChange();
        }
    }

    componentWillUnMount() {
        window.removeEventListener('resize', this.resize);
    }
    // 调用子组件函数
    onRef = ref => {
        this.musicChild = ref;
    }

    handleClickParentPause = e => {
        this.musicChild.handleClickPause();
    }

    render() {
        const {Background} = this.state;
        const {windowHeight} = this.props;
        const windowHeightRabbit = windowHeight / 4;
        const sectionStyle = {
            width: '100%',
            height: windowHeight,
            backgroundImage: `url(${Background})`,
        };
        return (
            <Fragment>
                {/* 背景图片切换样式 */}
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
                        <StopWatch />
                        <Button onClick={this.handleClickChangeBackground}>爱我你就点点我(*^_^*)</Button>
                        <Input
                            placeholder='say something'
                            style={{width: 300, marginLeft: 10, marginRight: 5}}
                            value={this.state.messageBoardInputvalue}
                            onChange={this.handleMessageInputChange}
                            onKeyPress={this.messageBoardKey}
                        />
                        <Button onClick={this.handleMessageBtnChange}>不爱你也点点我(*^_^*)</Button>
                        {/* <List
                            style={{width: 400, margin: 'auto', marginTop: 8}}
                            bordered
                            dataSource={this.state.messageBoardList}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        /> */}
                    </div>
                    {/* 调用音乐组件的函数 */}
                    <Music onRef={this.onRef} />
                    <Photo />
                    <Dialog />
                    <Link to="/love-yin-bao/treehole">
                        <img
                            style={{position: 'absolute', left: 0, bottom: 0, width: windowHeightRabbit, cursor: 'pointer'}}
                            src={Rabbit}
                            onClick={this.handleClickParentPause}
                        />
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    state => ({
        windowHeight: state.WindowHeight,
    }),
    {
        changeWindowHeight: changeWindowHeight,
    }
)(Main);
