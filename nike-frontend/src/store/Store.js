import { configureStore } from "@reduxjs/toolkit";
import footerReducer from '../slices/footerSlice';
import InfoCarouselReducer from '../slices/infoCarouselSlice';
import navbarReducer from '../slices/navbarSlice';
import shopReducer from '../slices/shopSlice';
import shoeCarouselReducer from '../slices/shoeCarouselSlice'; 
import videoReducer from '../slices/videoSlice';

export const store = configureStore({
    reducer: {
        footer: footerReducer,
        InfoCarousel: InfoCarouselReducer,
        navbar: navbarReducer,
        shop: shopReducer,
        shoeCarousel: shoeCarouselReducer,
        video: videoReducer,
    },
});