import React, {Component, Fragment} from 'react';
import {
    Link,
} from 'react-router-dom';

import Bear from './img/bear.png';

class TreeHole extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowHeight: document.body.clientHeight,
        };
    }

    // 背景图监听窗体改变事件
    screenChange = () => {
        window.addEventListener('resize', this.resize);
    }

    resize = () => {
        this.setState({
            windowHeight: document.body.clientHeight,
        });
    }

    render() {
        const {windowHeight} = this.state;
        const windowHeightBear = windowHeight / 4;
        return (
            <Fragment>
                <div style={{fontSize: 48}}>
                    树洞
                </div>
                <Link to="/love-yin-bao/main">
                    <img
                        style={{position: 'absolute', left: 0, bottom: 0, width: windowHeightBear, cursor: 'pointer'}}
                        src={Bear}
                    />
                </Link>
            </Fragment>
        );
    }
}

export default TreeHole;