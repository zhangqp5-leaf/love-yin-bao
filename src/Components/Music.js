import React, {Component, Fragment} from 'react';
import {createFromIconfontCN} from '@ant-design/icons';
import {List} from 'antd';
import MusicBase from './MusicBase';

import styles from './Music.module.less';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2410945_6v783pgeywh.js',
});

export default class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            musicName: '',
            musicList: [
                '想见你想见你想见你',
                '吉森信 - ゆるやかな畦道で',
                '梦中的婚礼',
                '倉木麻衣 - 渡月橋 ～君 想ふ～',
            ],
            showMusicList: false,
        };
        this.handleClickStopPlay = this.handleClickStopPlay.bind(this);
        this.handleClickShowMusicList = this.handleClickShowMusicList.bind(this);
    }
    // 点击播放事件
    handleClickPlay(item) {
        this.setState({
            musicName: item,
        });
    }
    // 点击停止播放并隐藏列表事件
    handleClickStopPlay() {
        this.setState({
            musicName: '',
            showMusicList: !this.state.showMusicList,
        });
    }
    // 点击打开或者隐藏列表事件
    handleClickShowMusicList() {
        this.setState({
            showMusicList: !this.state.showMusicList,
        });
    }

    render() {
        // console.log('又');
        return (
            this.state.showMusicList ? (
                <Fragment>
                    <div className={styles.musicPanal}>
                        <IconFont type="icon-music_icon" style={{fontSize: 60}} onClick={this.handleClickShowMusicList} />
                        <IconFont type="icon-guanbiyinle" style={{fontSize: 60, paddingLeft: 10}} onClick={this.handleClickStopPlay} />
                        <ul style={{margin: 'auto', marginTop: 16}}>
                            {
                                this.state.musicList.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            onClick={this.handleClickPlay.bind(this, item)}
                                            style={{fontSize: 15, padding: 5, fontFamily: 'sans-serif', fontWeight: 'bold', color: 'white'}}
                                        >
                                            {item}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <MusicBase
                        musicName={this.state.musicName}
                    />
                </Fragment>
            ) : (
                <Fragment>
                    <div className={styles.musicPanal}>
                        <IconFont type="icon-music_icon" style={{fontSize: 60}} onClick={this.handleClickShowMusicList} />
                    </div>
                    <MusicBase
                        musicName={this.state.musicName}
                    />
                </Fragment>
            )
        );
    }
}