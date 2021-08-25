import {
    createSlice,
} from '@reduxjs/toolkit';

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        photoDes: {photoDes: '在南京待的最后一天，去游乐场玩，开你喜欢的卡丁车', photoDate: '2021-03-22 12:19'},
        showPhoto: true,
        windowHeight: document.body.clientHeight,
    },
    reducers: {
        changePhotoDes: (state, action) => {
            state.photoDes = Object.assign({}, action.payload);
        },
        changeShowPhoto: (state, action) => {
            state.showPhoto = !state.showPhoto;
        },
        changeWindowHeight: (state, action) => {
            state.windowHeight = action.payload;
        },
    },
});

export const {
    changePhotoDes,
    changeShowPhoto,
    changeWindowHeight,
} = mainSlice.actions;

export default mainSlice.reducer;