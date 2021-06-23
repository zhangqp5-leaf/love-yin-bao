import React, {useState, useEffect} from 'react';
import axios from 'axios';

import styles from './One.module.less';

const oneURI = 'https://api.xygeng.cn/one';

const One = () => {
    const [oneSentance, setOneSentance] = useState('');

    useEffect(() => {
        var config = {
            method: 'get',
            url: oneURI,
        };
        axios(config)
            .then(response => {
                setOneSentance(response.data.data.content);
            })
            .catch(error => {
                console.log(error);
            });
    });

    return (
        <div className={styles.onePanal}>{oneSentance}</div>
    );
};

export default One;