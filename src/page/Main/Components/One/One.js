import React, {Component, useState, useEffect} from 'react';
import API from '../Api';

import styles from './One.module.less';

const One = props => {
    const [oneSentance, setOneSentance] = useState('');

    useEffect(() => {
        getOneSentance();
    }, []);

    const getOneSentance = async () => {
        const data = await API.getOneSentance();
        setOneSentance(data);
    };

    return (
        <div className={styles.onePanal}>{oneSentance}</div>
    );
};

export default One;
