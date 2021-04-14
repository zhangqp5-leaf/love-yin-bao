import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Divider} from 'antd';

import styles from './Dialog.module.less';

class Dialog extends Component {
    render() {
        const windowHeight = this.props.windowHeight / 4;
        const photoDes = this.props.photoDes;
        // console.log(photoDes);
        return (
            <Fragment>
                <div
                    style={{
                        position: 'absolute',
                        left: windowHeight,
                        bottom: windowHeight / 2,
                        maxHeight: windowHeight,
                        minHeight: windowHeight / 2,
                        maxWidth: '300px',
                        minWidth: '200px',
                        overflowX: 'auto',
                        overflowY: 'auto',
                    }}
                    className={styles.dialog}
                >
                    <div>{photoDes.photoDes}</div>
                    <Divider style={{border: '1px solid rgba(240, 240, 240, 100)', margin: '0px'}} />
                    <div style={{position: 'absolute', right: '6px'}}>{photoDes.photoDate}</div>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    state => ({
        windowHeight: state.WindowHeight,
        photoDes: state.PhotoDes,
    }),
    {}
)(Dialog);