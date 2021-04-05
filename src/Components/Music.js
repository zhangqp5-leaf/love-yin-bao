import React, {Component, Fragment} from 'react';
import {createFromIconfontCN} from '@ant-design/icons';
import {List, Button} from 'antd';
import MusicBase from './MusicBase';

import styles from './Music.module.less';

// const IconFont = createFromIconfontCN({
//     scriptUrl: '//at.alicdn.com/t/font_2410945_6v783pgeywh.js',
// });

export default class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            musicName: '',
            // musicList: [
            //     '想见你想见你想见你',
            //     '吉森信 - ゆるやかな畦道で',
            //     '梦中的婚礼',
            //     '倉木麻衣 - 渡月橋 ～君 想ふ～',
            // ],
            buttonName: '点歌',
            showMusicList: false,
        };
        // this.handleClickStopPlay = this.handleClickStopPlay.bind(this);
        this.handleClickShowMusicList = this.handleClickShowMusicList.bind(this);
    }

    componentDidMount() {
        this.setState({
            musicName: '想见你想见你想见你',
        });
    }

    // componentDidMount() {
    //     return (
    //         <audio
    //             src="http://music.163.com/song/media/outer/url?id=1403215687.mp3"
    //             autoPlay='autoplay'
    //             loop='loop'
    //             type='audio/mpeg'
    //         >
    //         </audio>
    //     );
    // }

    // 点击播放事件
    // handleClickPlay(item) {
    //     this.setState({
    //         musicName: item,
    //     });
    // }
    // 点击停止播放并隐藏列表事件
    // handleClickStopPlay() {
    //     this.setState({
    //         musicName: '',
    //         showMusicList: !this.state.showMusicList,
    //     });
    // }
    // 点击打开或者隐藏列表事件
    handleClickShowMusicList() {
        this.setState({
            showMusicList: !this.state.showMusicList,
            musicName: '',
            buttonName: this.state.showMusicList ? '点歌' : '关闭',
        });
    }

    render() {
        // console.log('又');
        const {buttonName, showMusicList, musicName} = this.state;
        return (
            showMusicList ? (
                <Fragment>
                    <div className={styles.musicPanal}>
                        {/* <IconFont type="icon-music_icon" style={{fontSize: 60}} onClick={this.handleClickShowMusicList} /> */}
                        <Button style={{left: '9px'}} onClick={this.handleClickShowMusicList}>{buttonName}</Button>
                        {/* <IconFont type="icon-guanbiyinle" style={{fontSize: 60, paddingLeft: 10}} onClick={this.handleClickStopPlay} /> */}
                        <iframe
                            frameBorder="no"
                            border="0"
                            marginWidth="0"
                            marginHeight="0"
                            width='330'
                            height='450'
                            src="http://music.163.com/outchain/player?type=0&id=6691525404&userid=378075663&auto=1&height=430"
                            // src="https://music.163.com/outchain/playlist?id=6683554465&user=378075663&auto=1&height=650"
                        >
                        </iframe>
                        {/* <ul style={{margin: 'auto', marginTop: 16}}>
                            {
                                this.state.musicList.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            onClick={this.handleClickPlay.bind(this, item)}
                                            style={{fontSize: 15, padding: 5, fontFamily: 'sans-serif', fontWeight: 'bold', color: 'white', cursor: 'pointer'}}
                                        >
                                            {item}
                                        </li>
                                    );
                                })
                            }
                        </ul> */}
                    </div>
                    <MusicBase
                        musicName={musicName}
                    />
                </Fragment>
            ) : (
                <Fragment>
                    <div className={styles.musicPanal}>
                        {/* <IconFont type="icon-music_icon" style={{fontSize: 60}} onClick={this.handleClickShowMusicList} /> */}
                        <Button style={{left: '9px'}} onClick={this.handleClickShowMusicList}>{buttonName}</Button>
                    </div>
                    <MusicBase
                        musicName={musicName}
                    />
                </Fragment>
            )
        );
    }
}