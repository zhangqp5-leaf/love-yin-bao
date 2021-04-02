import React, {Component, Fragment} from 'react';
import {Button, Input, List} from 'antd';
import {CSSTransition} from 'react-transition-group';
import StopWatch from './Components/StopWatch';
import Music from './Components/Music';
import Photo from './Components/Photo';

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
import messageBoardData from './data/messageBoard.json';


// const fs = require('fs');
// var params = {
//     'id': 5,
//     'name': '白眉鹰王',
// };
// function writeJson(params) {
//     // 现将json文件读出来
//     fs.readFile('./data/messageBoard.json', (err, data) => {
//         if (err) {
//             return console.error(err);
//         }
//         var person = data.toString(); // 将二进制的数据转换为字符串
//         person = JSON.parse(person); // 将字符串转换为json对象
//         person.data.push(params); // 将传来的对象push进数组对象中
//         person.total = person.data.length; // 定义一下总条数，为以后的分页打基础
//         console.log(person.data);
//         var str = JSON.stringify(person); // 因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
//         fs.writeFile('./data/messageBoard.json', str, function (err) {
//             if (err) {
//                 console.error(err);
//             }
//             console.log('----------新增成功-------------');
//         });
//     });
// }

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowBackground: false,
            Background: Background2,
            backgroundList: [Background1, Background2, Background3, Background4, Background5, Background6, Background7, Background8],
            messageBoardInputvalue: '',
            messageBoardList: [],
        };
        this.handleClickChangeBackground = this.handleClickChangeBackground.bind(this);
        this.handleMessageInputChange = this.handleMessageInputChange.bind(this);
        this.handleMessageBtnChange = this.handleMessageBtnChange.bind(this);
        this.messageBoardKey = this.messageBoardKey.bind(this);
    }

    componentDidMount() {
        // 读取json文件数据
        this.setState({
            messageBoardList: messageBoardData,
        });
        // writeJson(params); // 执行一下;
    }

    // 切换背景图片事件
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
            isShowBackground: !this.state.isShowBackground,
        });
    }
    // 输入框数据传到代码字符串
    handleMessageInputChange(e) {
        this.setState({
            messageBoardInputvalue: e.target.value,
        });
    }
    // 添加输入框数据到表单
    handleMessageBtnChange() {
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

    render() {
        // 背景图片style
        const sectionStyle = {
            width: '100%',
            height: '940px',
            backgroundImage: `url(${this.state.Background})`,
        };
        // console.log(day1)
        // console.log(this.state.backgroundList);
        // console.log(this.state.Background);
        // console.log(this.state.isShowBackground);
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
                        <List
                            style={{width: 400, margin: 'auto', marginTop: 8}}
                            bordered
                            dataSource={this.state.messageBoardList}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                    <Music />
                    <Photo />
                </div>
            </Fragment>
        );
    }
}
