import React, {Component, Fragment} from 'react';
import {
    Link,
} from 'react-router-dom';
import {connect} from 'react-redux';
import CalendarInfo from './Components/Calendar/Calendar';

import Bear from './img/bear.png';

class TreeHole extends Component {

    render() {
        const {windowHeight} = this.props;
        const windowHeightBear = windowHeight / 4;
        return (
            <Fragment>
                <CalendarInfo />
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
        windowHeight: state.main.windowHeight,
    }),
    {}
)(TreeHole);
