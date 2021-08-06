import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Divider} from 'antd';

import styles from './Dialog.module.less';

// 对于简单组件只有一个render方法，并且不包含state，那么可以使用函数组件
function Dialog(props) {
    const windowHeight = props.windowHeight / 4;
    const photoDes = props.photoDes;
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
                <Divider className={styles.dialogContent} />
                <div className={styles.dialogDate}>{photoDes.photoDate}</div>
            </div>
        </Fragment>
    );
}

export default connect(
    state => ({
        windowHeight: state.WindowHeight,
        photoDes: state.PhotoDes,
    }),
    {}
)(Dialog);