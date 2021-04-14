import {
    createStore,
    combineReducers,
} from 'redux';
import WindowHeight from './Reducers/WindowHeight';
import PhotoDes from './Reducers/PhotoDes';

const reducer = combineReducers({
    WindowHeight: WindowHeight,
    PhotoDes: PhotoDes,
});

const store = createStore(reducer);

export default store;