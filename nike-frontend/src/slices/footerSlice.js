import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    openMenu: null,
    isGuideOpen: false,
}

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        setOpenMenu(state, action) {
            state.openMenu = action.payload
        },
        toggleOpenMenu(state, action) {
            state.openMenu = state.openMenu === action.payload ? null : action.payload
        },
        setIsGuide(state, action) {
            state.isGuideOpen = action.payload
        },
    },
})

export const { setOpenMenu, toggleOpenMenu, setIsGuide } = footerSlice.actions;

export default footerSlice.reducer; 