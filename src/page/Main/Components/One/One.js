import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

import styles from './One.module.less';

const oneURI = 'https://api.vvhan.com/api/love?type=json';

class One extends Component {

    state = {
        oneSentance: '',
    };

    componentDidMount() {
        this.getOneSentance();
    }

    getOneSentance = () => {
        var config = {
            method: 'get',
            url: oneURI,
        };
        axios(config)
            .then(response => {
                console.log(response.data.ishan);
                // setOneSentance(response.data.ishan);
                this.setState({oneSentance: response.data.ishan});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const {oneSentance} = this.state;
        return (
            <div className={styles.onePanal}>{oneSentance}</div>
        );
    }
}

// const One = () => {
//     const [oneSentance, setOneSentance] = useState('');

//     // useEffect(() => {
//     //     let timeID = setInterval(() => {
//     //         var config = {
//     //             method: 'get',
//     //             url: oneURI,
//     //         };
//     //         axios(config)
//     //             .then(response => {
//     //                 console.log(response.data.ishan);
//     //                 // setOneSentance(response.data.ishan);
//     //             })
//     //             .catch(error => {
//     //                 console.log(error);
//     //             });
//     //     }, 1000);
//     //     return () => clearInterval(timeID);
//     // });

//     useEffect(() => {
//         var config = {
//             method: 'get',
//             url: oneURI,
//         };
//         axios(config)
//             .then(response => {
//                 console.log(response.data.ishan);
//                 // setOneSentance(response.data.ishan);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     });

//     return (
//         <div className={styles.onePanal}>{oneSentance}</div>
//     );
// };

export default One;