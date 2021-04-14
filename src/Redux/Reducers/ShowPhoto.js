import {
    CHANGESHOWPHOTO,
} from '../Constant';

const initState = true;

function showPhotoReducer(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case CHANGESHOWPHOTO:
            return !preState;
        default:
            return preState;
    }
}

export default showPhotoReducer;