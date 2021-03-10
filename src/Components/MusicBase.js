import React, {Component} from 'react';

export default class MusicBase extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.musicName === '吉森信 - ゆるやかな畦道で') {
            return (
                <audio
                    src="http://m10.music.126.net/20210310120800/97e6969357fca07910c4502905fb2283/ymusic/51a3/946b/c73d/3be4037438abe5ae82b998ca9976b6af.mp3"
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
                    src="http://m10.music.126.net/20210310141133/23593801178b9b93e79b4207eb294250/ymusic/1738/6f71/1c6e/88bdb9656244a427597b07b29722c14d.mp3"
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
                    src="http://m10.music.126.net/20210310144047/2de5e3b9c3627ebfb277b3005f1973eb/ymusic/6da1/53d4/c7ba/90596812223c59df0b991ed5c2624206.mp3"
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