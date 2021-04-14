import {
    CHANGEPHOTODES,
} from '../Constant';

const initState = {photoDes: '在南京待的最后一天，去游乐场玩，开你喜欢的卡丁车', photoDate: '2021-03-22 12:19'};

function photoDesReducer(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case CHANGEPHOTODES:
            let dataCopy = JSON.parse(JSON.stringify(data));
            return dataCopy;
        default:
            return preState;
    }
}

export default photoDesReducer;