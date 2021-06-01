import React, {Component, Fragment} from 'react';
import {
    Button,
} from 'antd';

import styles from './Buttons.module.less';

class Buttons extends Component {

    // 调用子组件函数
    onRef = ref => {
        this.musicChild = ref;
    }

    handleClickParentPause = e => {
        this.musicChild.handleClickPause();
    }

    render() {
        return (
            <Fragment>
                <div className={styles.ButtonsStyle}>
                    <div>
                        <Button>
                            点歌
                        </Button>
                    </div>
                    <div>
                        <Button>
                            相册
                        </Button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Buttons;