import React, {Component, Fragment} from 'react';
import {createFromIconfontCN} from '@ant-design/icons';
import {List, Button} from 'antd';
import MusicBase from './MusicBase';
import MusicAPlayer from './MusicAPlayer';
import ReactAPlayer from 'react-aplayer';

import img1 from '../../img/music/musicImg/Snipaste_2021-04-07_11-50-31.png';
import img2 from '../../img/music/musicImg/Snipaste_2021-04-07_12-16-46.png';
import img3 from '../../img/music/musicImg/Snipaste_2021-04-07_12-21-11.png';
import img4 from '../../img/music/musicImg/Snipaste_2021-04-07_12-23-29.png';
import img5 from '../../img/music/musicImg/Snipaste_2021-04-07_12-25-26.png';
import img6 from '../../img/music/musicImg/Snipaste_2021-04-07_12-28-12.png';
import img7 from '../../img/music/musicImg/Snipaste_2021-04-07_12-30-13.png';
import img8 from '../../img/music/musicImg/Snipaste_2021-04-07_12-32-19.png';
import img9 from '../../img/music/musicImg/Snipaste_2021-04-07_12-33-56.png';
import img10 from '../../img/music/musicImg/Snipaste_2021-04-07_12-35-39.png';
import img11 from '../../img/music/musicImg/Snipaste_2021-04-07_12-46-48.png';
import img12 from '../../img/music/musicImg/Snipaste_2021-04-07_12-48-35.png';
import img13 from '../../img/music/musicImg/Snipaste_2021-04-07_12-50-13.png';
import img14 from '../../img/music/musicImg/Snipaste_2021-04-07_12-51-43.png';

import lrc1 from '../../img/music/musicLrc/想见你想见你想见你 - 八三夭.lrc';
import lrc2 from '../../img/music/musicLrc/너의 의미 - IU,金昌万.lrc';
import lrc3 from '../../img/music/musicLrc/樱花樱花想见你 - 李蚊香,满汉全席.lrc';
import lrc4 from '../../img/music/musicLrc/木桥小谣 - 音阙诗听,王梓钰.lrc';
import lrc5 from '../../img/music/musicLrc/可不可以 - 张紫豪.lrc';
import lrc6 from '../../img/music/musicLrc/而我知道 - 五月天.lrc';
import lrc7 from '../../img/music/musicLrc/爱的人 - 沙宝亮.lrc';
import lrc8 from '../../img/music/musicLrc/离人愁 - 曲肖冰.lrc';
import lrc9 from '../../img/music/musicLrc/丁香花 - 唐磊.lrc';
import lrc10 from '../../img/music/musicLrc/我一定会爱上你 - 谢春花.lrc';
import lrc11 from '../../img/music/musicLrc/小永远 - 何洁.lrc';
import lrc12 from '../../img/music/musicLrc/明天你好 - 牛奶咖啡.lrc';
import lrc13 from '../../img/music/musicLrc/我好想你 - 苏打绿.lrc';
import lrc14 from '../../img/music/musicLrc/老街 - 李荣浩.lrc';

import styles from './Music.module.less';


export default class Music extends Component {

    state = {
        musicName: '',
        buttonName: '点歌',
        showMusicList: false,
    }

    componentDidMount() {
        this.setState({
            musicName: '想见你想见你想见你',
        });
        this.props.onRef(this);
    }


    // 点击打开或者隐藏列表事件
    handleClickShowMusicList = () => {
        this.setState({
            showMusicList: !this.state.showMusicList,
            musicName: '',
            buttonName: this.state.showMusicList ? '点歌' : '关闭',
        });
    }

    onPlay = () => {
        console.log('on play');
    };

    onPause = () => {
        console.log('on pause');
    };

    onInit = ap => {
        this.ap = ap;
    };
    // 暂停音乐
    handleClickPause = () => {
        this.state.showMusicList ? this.ap.pause() : '';
    }

    render() {
        // console.log('又');
        const {buttonName, showMusicList, musicName} = this.state;
        const props = {
            theme: '#b7daff',
            lrcType: 3,
            listFolded: false,
            listMaxHeight: '380px',
            audio: [
                {
                    name: '너의 의미 (你的意义)',
                    artist: 'IU / 金昌万',
                    url: 'http://music.163.com/song/media/outer/url?id=28557036.mp3',
                    cover: img2,
                    lrc: lrc2,
                    theme: '#ebd0c2',
                },
                {
                    name: '想见你想见你想见你',
                    artist: '八三夭乐团',
                    url: 'http://music.163.com/song/media/outer/url?id=1403215687.mp3',
                    cover: img1,
                    lrc: lrc1,
                    theme: '#b7daff',
                },
                {
                    name: '樱花樱花想见你',
                    artist: '李蚊香 / 满汉全席',
                    url: 'http://music.163.com/song/media/outer/url?id=440241194.mp3',
                    cover: img3,
                    lrc: lrc3,
                    theme: '#ebd0c2',
                },
                {
                    name: '木桥小谣',
                    artist: '音阙诗听 / 王梓钰',
                    url: 'http://music.163.com/song/media/outer/url?id=1348999273.mp3',
                    cover: img4,
                    lrc: lrc4,
                    theme: '#ebd0c2',
                },
                {
                    name: '可不可以',
                    artist: '张紫豪',
                    url: 'http://music.163.com/song/media/outer/url?id=553755659.mp3',
                    cover: img5,
                    lrc: lrc5,
                    theme: '#ebd0c2',
                },
                {
                    name: '而我知道',
                    artist: '五月天',
                    url: 'http://music.163.com/song/media/outer/url?id=385984.mp3',
                    cover: img6,
                    lrc: lrc6,
                    theme: '#ebd0c2',
                },
                {
                    name: '爱的人',
                    artist: '沙宝亮',
                    url: 'http://music.163.com/song/media/outer/url?id=145510.mp3',
                    cover: img7,
                    lrc: lrc7,
                    theme: '#ebd0c2',
                },
                {
                    name: '离人愁',
                    artist: '曲肖冰',
                    url: 'http://music.163.com/song/media/outer/url?id=549309116.mp3',
                    cover: img8,
                    lrc: lrc8,
                    theme: '#ebd0c2',
                },
                {
                    name: '丁香花',
                    artist: '唐磊',
                    url: 'http://music.163.com/song/media/outer/url?id=151985.mp3',
                    cover: img9,
                    lrc: lrc9,
                    theme: '#ebd0c2',
                },
                {
                    name: '我一定会爱上你',
                    artist: '谢春花',
                    url: 'http://music.163.com/song/media/outer/url?id=479219330.mp3',
                    cover: img10,
                    lrc: lrc10,
                    theme: '#ebd0c2',
                },
                {
                    name: '小永远',
                    artist: '何洁',
                    url: 'http://music.163.com/song/media/outer/url?id=240125.mp3',
                    cover: img11,
                    lrc: lrc11,
                    theme: '#ebd0c2',
                },
                {
                    name: '明天你好 电视剧《加油吧实习生》插曲',
                    artist: '牛奶咖啡',
                    url: 'http://music.163.com/song/media/outer/url?id=33756016.mp3',
                    cover: img12,
                    lrc: lrc12,
                    theme: '#ebd0c2',
                },
                {
                    name: '我好想你 I Miss You So',
                    artist: '苏打绿',
                    url: 'http://music.163.com/song/media/outer/url?id=26562739.mp3',
                    cover: img13,
                    lrc: lrc13,
                    theme: '#ebd0c2',
                },
                {
                    name: '老街',
                    artist: '李荣浩',
                    url: 'http://music.163.com/song/media/outer/url?id=133998.mp3',
                    // url: '//music.163.com/outchain/player?type=2&id=133998',
                    cover: img14,
                    lrc: lrc14,
                    theme: '#ebd0c2',
                },
            ],
        };
        return (
            showMusicList ? (
                <Fragment>
                    <div className={styles.musicPanal}>
                        <Button
                            style={{left: '5px'}}
                            onClick={() => {
                                this.handleClickPause();
                                this.handleClickShowMusicList();
                            }}
                        >
                            {buttonName}
                        </Button>
                        <ReactAPlayer
                            {...props}
                            onInit={this.onInit}
                            onPlay={this.onPlay}
                            onPause={this.onPause}
                        />
                        {/* <MusicAPlayer /> */}
                        {/* <iframe
                            frameBorder="no"
                            border="0"
                            marginWidth="0"
                            marginHeight="0"
                            width='330'
                            height='450'
                            src="//music.163.com/outchain/player?type=0&id=6691525404&userid=378075663&auto=1&height=430"
                            // src="https://music.163.com/outchain/playlist?id=6683554465&user=378075663&auto=1&height=650"
                        >
                        </iframe> */}
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div className={styles.musicPanal}>
                        <Button style={{left: '5px'}} onClick={this.handleClickShowMusicList}>{buttonName}</Button>
                    </div>
                    <MusicBase
                        musicName={musicName}
                    />
                </Fragment>
            )
        );
    }
}