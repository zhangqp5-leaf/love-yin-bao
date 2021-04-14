import React, {Component, Fragment} from 'react';
import {
    Link,
} from 'react-router-dom';
import {connect} from 'react-redux';

import Bear from './img/bear.png';

class TreeHole extends Component {

    render() {
        const {windowHeight} = this.props;
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

export default connect(
    state => ({
        windowHeight: state.WindowHeight,
    }),
    {}
)(TreeHole);
