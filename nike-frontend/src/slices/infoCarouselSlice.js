import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentIndex: 0,
    messages: [
        'Get a Nike Gift Card',
        'Members: Free Shipping on Orders $50+',
        'Look for Store Pickup at Checkout',
      ]
};

const  infoCarouselSlice = createSlice({
    name: 'infoCarousel',
    initialState,
    reducers: {
        nextMessage: (state) => {
            state.currentIndex = (state.currentIndex + 1) % state.messages.length;
        },
        prevMessage: (state) => {
            state.currentIndex = (state.currentIndex - 1 + state.messages.length) % state.messages.length;
        },
        setMessageIndex: (state) => {
            state.currentIndex = action.payload
        }
    }
});

export const { nextMessage, prevMessage, setMessageIndex } = infoCarouselSlice.actions;

export default infoCarouselSlice.reducer;