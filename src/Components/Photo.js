import React, {Component, Fragment} from 'react';
import {Button} from 'antd';

import photo1 from '../img/photo/IMG_0604.JPG';
import photo2 from '../img/photo/IMG_0650.JPG';
import photo3 from '../img/photo/IMG_0652.JPG';
import photo4 from '../img/photo/IMG_0657.JPG';
import photo5 from '../img/photo/IMG_0725.JPG';
import photo6 from '../img/photo/IMG_0659.JPG';
import photo7 from '../img/photo/IMG_0726.JPG';
import photo8 from '../img/photo/IMG_0717.JPG';
import photo9 from '../img/photo/IMG_0724.JPG';
import photo10 from '../img/photo/IMG_0663.JPG';
import photo11 from '../img/photo/IMG_0665.JPG';
// import photo12 from '../img/photo/IMG_0717.JPG';

import styles from './Photo.module.less';

class Photo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMusicList: true,
            buttonName: '关闭',
            date: new Date(),
            photoList: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11],
            photo: photo2,
        };
        this.handleClickShowPhoto = this.handleClickShowPhoto.bind(this);
        // this.handleClickChangephoto = this.handleClickChangephoto.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
            photo: this.state.photoList[Math.floor(Math.random() * this.state.photoList.length)],
        });
        // this.handleClickChangephoto();
        // this.handleClickShowPhoto();
        // console.log('test');
        // console.log(this.state.photo);
        // console.log(this.state.photoList);
    }

    // handleClickChangephoto = () => {
    //     for (var i = 0; i < this.state.photoList.length; i++) {
    //         if (this.state.photoList[i] === this.state.photo) {
    //             this.setState({
    //                 photoList: this.state.photoList.splice(i, 1),
    //             });
    //         }
    //     };
    //     let photoCopy = this.state.photo;
    //     this.setState({
    //         photo: this.state.photoList[Math.floor(Math.random() * this.state.photoList.length)],
    //         photoList: [...this.state.photoList, photoCopy],
    //         // isShowBackground: !this.state.isShowBackground,
    //     });
    //     console.log('test');
    //     console.log(this.state.photo);
    //     console.log(this.state.photoList);
    // }

    handleClickShowPhoto = () => {
        this.setState({
            showMusicList: !this.state.showMusicList,
            buttonName: this.state.showMusicList ? '照片' : '关闭',
        });
    }

    render() {
        const {showMusicList, buttonName, photo} = this.state;
        return (
            showMusicList ? (
                <Fragment>
                    <div className={styles.photoPanal}>
                        <div className={styles.buttonPosition}>
                            <Button onClick={this.handleClickShowPhoto}>{buttonName}</Button>
                        </div>
                        <div>
                            <img src={photo} className={styles.photoPosition} />
                        </div>
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

export default Photo;