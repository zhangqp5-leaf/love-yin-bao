import {
    CHANGEWINDOWHEIGHT,
} from '../Constant';

const initState = document.body.clientHeight;

function windowHeightReducer(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case CHANGEWINDOWHEIGHT:
            return data;
        default:
            return preState;
    }
}

export default windowHeightReducer;