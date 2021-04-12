import {
    createStore,
    combineReducers,
} from 'redux';
import WindowHeight from './Reducers/WindowHeight';

const reducer = combineReducers({
    WindowHeight: WindowHeight,
});

const store = createStore(reducer);

export default store;