// import {
//     createStore,
//     combineReducers,
// } from 'redux';
// import WindowHeight from './Reducers/WindowHeight';
// import PhotoDes from './Reducers/PhotoDes';
// import ShowPhoto from './Reducers/ShowPhoto';

// const reducer = combineReducers({
//     WindowHeight: WindowHeight,
//     PhotoDes: PhotoDes,
//     ShowPhoto: ShowPhoto,
// });

// const store = createStore(reducer);

// export default store;

import mainReducer from './Main/main';
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        main: mainReducer,
    },
});
