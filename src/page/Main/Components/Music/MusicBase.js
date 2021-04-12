import React, {Component} from 'react';

export default class MusicBase extends Component {

    render() {
        switch (this.props.musicName) {
            case '想见你想见你想见你':
                return (
                    <audio
                        src="http://music.163.com/song/media/outer/url?id=1403215687.mp3"
                        autoPlay='autoplay'
                        loop='loop'
                        type='audio/mpeg'
                    >
                    </audio>
                );
            case '吉森信 - ゆるやかな畦道で':
                return (
                    <audio
                        src="http://music.163.com/song/media/outer/url?id=541976.mp3"
                        autoPlay='autoplay'
                        loop='loop'
                        type='audio/mpeg'
                    >
                    </audio>
                );
            case '梦中的婚礼':
                return (
                    <audio
                        src="http://music.163.com/song/media/outer/url?id=34341360.mp3"
                        autoPlay='autoplay'
                        loop='loop'
                        type='audio/mpeg'
                    >
                    </audio>
                );
            case '倉木麻衣 - 渡月橋 ～君 想ふ～':
                return (
                    <audio
                        src="http://music.163.com/song/media/outer/url?id=473023478.mp3"
                        autoPlay='autoplay'
                        loop='loop'
                        type='audio/mpeg'
                    >
                    </audio>
                );
            default:
                return <div></div>;
        }
    }
}