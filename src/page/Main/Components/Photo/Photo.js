import React, {Component, Fragment} from 'react';
import {Button, Tooltip, Popover, Divider} from 'antd';
import {connect} from 'react-redux';
import {changePhotoDes} from '../../../../Redux/Actions/PhotoDes';

import photo1 from '../../img/photo/IMG_0604.JPG';
import photo2 from '../../img/photo/IMG_0650.JPG';
import photo3 from '../../img/photo/IMG_0652.JPG';
import photo4 from '../../img/photo/IMG_0657.JPG';
import photo5 from '../../img/photo/IMG_0725.JPG';
import photo6 from '../../img/photo/IMG_0659.JPG';
import photo7 from '../../img/photo/IMG_0726.JPG';
import photo8 from '../../img/photo/IMG_0717.JPG';
import photo9 from '../../img/photo/IMG_0724.JPG';
import photo10 from '../../img/photo/IMG_0663.JPG';
import photo11 from '../../img/photo/IMG_0665.JPG';
// import photo12 from '../../img/photo/IMG_0717.JPG';

import styles from './Photo.module.less';

class Photo extends Component {

    state = {
        showMusicList: true,
        buttonName: '关闭',
        date: new Date(),
        photoListJson: [
            {photoName: photo1, photoDesList: '宝贝在春游！', photoDate: '2021-03-14'},
            {photoName: photo2, photoDesList: '在最浪漫的摩天轮上，你在看风景，我在看你♥', photoDate: '2021-03-22 11:19'},
            {photoName: photo3, photoDesList: '在南京待的最后一天，去游乐场玩，开你喜欢的卡丁车', photoDate: '2021-03-22 12:19'},
            {photoName: photo4, photoDesList: '从广州到南京，从飞机出口到接机处，一步一步', photoDate: '2021-03-20'},
            {photoName: photo5, photoDesList: '大手小手，手牵手', photoDate: '2021-03-21 18:50'},
            {photoName: photo6, photoDesList: '宝宝室友眼中的我们', photoDate: '2021-03-21'},
            {photoName: photo7, photoDesList: '蜜汁角度', photoDate: '2021-03-21'},
            {photoName: photo8, photoDesList: '尹宝买的生日蛋糕，好吃！！！', photoDate: '2021-04-05 19:43'},
            {photoName: photo9, photoDesList: '三叶草，一起走以后的路', photoDate: '2021-03-20'},
            {photoName: photo10, photoDesList: '甜蜜日常', photoDate: '2021-03-22'},
            {photoName: photo11, photoDesList: '我们的第一次合照', photoDate: '2021-03-20'},
        ],
        photoList: [],
        photoDesList: [],
        photoDateList: [],
        photo: photo3,
        // photoDes: '在南京待的最后一天，去游乐场玩，开你喜欢的卡丁车',
        // photoDate: '2021-03-22 12:19',
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            3000
        );
        this.preChangePhotoList();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const {photoList, photo} = this.state;
        let photoListBefore = JSON.parse(JSON.stringify(photoList));
        for (var i = 0; i < photoListBefore.length; i++) {
            if (photoListBefore[i] === this.state.photo) {
                photoListBefore.splice(i, 1);
            }
        };
        let photoAfter = JSON.parse(JSON.stringify(photoListBefore[Math.floor(Math.random() * photoListBefore.length)]));
        this.setState({
            date: new Date(),
            photo: photoAfter,
        });
        for (var i = 0; i < photoList.length; i++) {
            if (photoList[i] === photoAfter) {
                // this.setState({
                //     photoDes: this.state.photoDesList[i],
                //     photoDate: this.state.photoDateList[i],
                // });
                const photoDesData = {photoDes: this.state.photoDesList[i], photoDate: this.state.photoDateList[i]};
                this.props.changePhotoDes(photoDesData);
            }
        };
    }



    handleClickShowPhoto = () => {
        this.setState({
            showMusicList: !this.state.showMusicList,
            buttonName: this.state.showMusicList ? '照片' : '关闭',
        });
    }
    // 页面加载前转换数据格式
    preChangePhotoList = () => {
        let photoListBak = JSON.parse(JSON.stringify(this.state.photoList));
        let photoDesListBak = JSON.parse(JSON.stringify(this.state.photoDesList));
        let photoDateListBak = JSON.parse(JSON.stringify(this.state.photoDateList));
        for (var i = 0; i < this.state.photoListJson.length; i++) {
            photoListBak = [...photoListBak, this.state.photoListJson[i].photoName];
            photoDesListBak = [...photoDesListBak, this.state.photoListJson[i].photoDesList];
            photoDateListBak = [...photoDateListBak, this.state.photoListJson[i].photoDate];
        }
        this.setState({
            photoList: photoListBak,
            photoDesList: photoDesListBak,
            photoDateList: photoDateListBak,
        });
    }

    render() {
        // console.log(this.state.photoDesList);
        const {showMusicList, buttonName, photo, photoDate} = this.state;
        const {windowHeight, photoDes} = this.props;
        const windowHeightChild = windowHeight - 60;
        // const content = (
        //     <div>
        //         <div>{photoDes.photoDate}</div>
        //         <Divider style={{border: '0.01px solid rgba(240, 240, 240, 100)', left: '24px', right: '24px', margin: '0px'}} />
        //         <div>{photoDes.photoDes}</div>
        //     </div>
        // );
        return (
            showMusicList ? (
                <Fragment>
                    <div className={styles.photoPanal}>
                        <div className={styles.buttonPosition}>
                            <Button onClick={this.handleClickShowPhoto}>{buttonName}</Button>
                            {/* <Button onClick={this.tickTest}>test</Button> */}
                        </div>
                        {/* <Popover placement="rightBottom" trigger="click" title={photoDate} content={photoDes} overlayClassName={styles.tooltipStyle}>
                            <img src={photo} className={styles.photoPosition} style={{maxHeight: windowHeightChild, overflowY: 'auto'}} />
                        </Popover> */}
                        {/* <Tooltip placement="rightBottom" trigger="click" title={content} overlayClassName={styles.tooltipStyle} defaultVisible='true'>
                            <img src={photo} className={styles.photoPosition} style={{maxHeight: windowHeightChild, cursor: 'pointer'}} />
                        </Tooltip> */}
                        <img src={photo} className={styles.photoPosition} style={{maxHeight: windowHeightChild}} />
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div className={styles.photoPanal}>
                        <div className={styles.buttonPosition}>
                            <Button onClick={this.handleClickShowPhoto}>{buttonName}</Button>
                        </div>
                    </div>
                </Fragment>
            )
        );
    }
}

export default connect(
    state => ({
        windowHeight: state.WindowHeight,
        photoDes: state.PhotoDes,
    }),
    {
        changePhotoDes: changePhotoDes,
    }
)(Photo);