import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVideoPlaying: false,
};

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setVideoPlaying: (state, action) => {
            state.isVideoPlaying = action.payload;
        },
    },
});

export const { setVideoPlaying } = videoSlice.actions;

export default videoSlice.reducer;