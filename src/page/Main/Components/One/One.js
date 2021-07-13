import React, {Component, useState, useEffect} from 'react';
import API from '../Api';

import styles from './One.module.less';

class One extends Component {

    state = {
        oneSentance: '',
    };

    componentDidMount() {
        this.getOneSentance();
    }

    getOneSentance = async () => {
        const self = this;
        const data = await API.getOneSentance();
        self.setState({
            oneSentance: data,
        });
    }

    render() {
        const {oneSentance} = this.state;
        return (
            <div className={styles.onePanal}>{oneSentance}</div>
        );
    }
}

export default One;
