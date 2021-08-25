import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Button, Input, List} from 'antd';
import StopWatch from './Components/StopWatch/StopWatch';
import Music from './Components/Music/Music';
import Photo from './Components/Photo/Photo';
import Dialog from './Components/Dialog/Dialog';
import One from './Components/One/One';
// import Buttons from './Components/Buttons/Buttons';
import {
    Link,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeWindowHeight} from '../../Redux/Main/main';

import styles from './Index.module.less';
import './Index.css';

import Rabbit from './img/Rabbit.png';

// const bingURI = 'https://jsonp.afeld.me/?callback=&url=https%3A%2F%2Fcn.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26cc%3Djp%26idx%3D0%26n%3D1';

class Main extends Component {

    state = {
        windowWidth: document.body.clientWidth,
    };

    componentDidMount() {
        this.screenChange();
    }

    // 背景图监听窗体改变事件
    screenChange = () => {
        window.addEventListener('resize', this.resize);
    }

    resize = () => {
        this.props.changeWindowHeight(document.body.clientHeight);
        const windowWidth = document.body.clientWidth;
        this.setState({
            windowWidth: windowWidth,
        });
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
        const backGround = 'https://api.sunweihu.com/api/bing1/api.php';
        const {windowWidth} = this.state;
        const {windowHeight, showPhoto} = this.props;
        const windowHeightRabbit = windowHeight / 4;
        const sectionStyle = {
            width: '100%',
            height: windowHeight,
            backgroundImage: `url(${backGround})`,
        };
        return (
            <Fragment>
                <div style={sectionStyle}></div>
                <div className={styles.container}>
                    <div className={styles.stopWatchStyle}>
                        <StopWatch />
                    </div>
                    <One />
                    {/* <Buttons /> */}
                    {/* 调用音乐组件的函数 */}
                    <Music onRef={this.onRef} />
                    <Photo />
                    {
                        showPhoto ? <Dialog /> : ''
                    }
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

// const mapStateToProps = (state, ownProps) => {
//     return {
//         windowHeight: state.main.windowHeight,
//         showPhoto: state.main.showPhoto,
//     };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         changeWindowHeight: data => {
//             dispatch(changeWindowHeight(data));
//         },
//     };
// };

export default connect(
    state => ({
        windowHeight: state.main.windowHeight,
        showPhoto: state.main.showPhoto,
    }),
    dispatch => ({
        changeWindowHeight: data => {
            dispatch(changeWindowHeight(data));
        },
    })
)(Main);

