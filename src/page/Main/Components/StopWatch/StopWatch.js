import React, {Fragment, useState, useEffect} from 'react';

import styles from './StopWatch.module.less';

const StopWatch = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timerID);
    });

    let startTime = new Date(2021, 1, 11, 23, 58);
    let endTime = new Date();
    let leftTime = endTime.getTime() - startTime.getTime();
    let leftSecond = parseInt(leftTime / 1000);
    let day1 = Math.floor(leftSecond / (60 * 60 * 24));
    let hour1 = Math.floor((leftSecond - day1 * 24 * 60 * 60) / 3600);
    let minute1 = Math.floor((leftSecond - day1 * 24 * 60 * 60 - hour1 * 3600) / 60);
    let second1 = Math.floor(leftSecond - day1 * 24 * 60 * 60 - hour1 * 3600 - minute1 * 60);

    return (
        <Fragment>
            <div className={styles.appTextStyle}>
                和尹宝在一起已经
            </div>
            <div className={styles.appTimeStyle}>
                <span className={styles.childAppTimeBigStyle}>{day1}</span>
                <span className={styles.childAppTimeSmallStyle}>天</span>
                <span className={styles.childAppTimeBigStyle}>{hour1}</span>
                <span className={styles.childAppTimeSmallStyle}>小时</span>
                <span className={styles.childAppTimeBigStyle}>{minute1}</span>
                <span className={styles.childAppTimeSmallStyle}>分钟</span>
            </div>
            <div className={styles.appTimeStyle}>
                <span className={styles.childAppTimeBigStyle}>{second1}</span>
                <span className={styles.childAppTimeSmallStyle}>秒</span>
            </div>
        </Fragment>
    );
};

export default StopWatch;