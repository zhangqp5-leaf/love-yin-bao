import React, {Component} from 'react';

export default class MusicBase extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.musicName === '吉森信 - ゆるやかな畦道で') {
            return (
                <audio
                    src="http://music.163.com/song/media/outer/url?id=541976.mp3"
                    // controls='controls'
                    autoPlay='autoplay'
                    loop='loop'
                    type='audio/mpeg'
                >
                </audio>
            );
        }
        if (this.props.musicName === '梦中的婚礼') {
            return (
                <audio
                    src="http://music.163.com/song/media/outer/url?id=34341360.mp3"
                    // controls='controls'
                    autoPlay='autoplay'
                    loop='loop'
                    type='audio/mpeg'
                >
                </audio>
            );
        }
        if (this.props.musicName === '倉木麻衣 - 渡月橋 ～君 想ふ～') {
            return (
                <audio
                    src="http://music.163.com/song/media/outer/url?id=473023478.mp3"
                    // controls='controls'
                    autoPlay='autoplay'
                    loop='loop'
                    type='audio/mpeg'
                >
                </audio>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}