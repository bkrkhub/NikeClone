import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenu: null,
    isSearchOpen: false,
    isHelpOpen: false,
    isMobileMenuOpen: false,
    mobileActiveMenu: null,
    mobileSubMenuTitle: null
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setActiveMenu: (state, action) => {
        state.activeMenu = action.payload;
        },
        setIsSearchOpen: (state, action) => {
        state.isSearchOpen = action.payload;
        },
        setIsHelpOpen: (state, action) => {
        state.isHelpOpen = action.payload;
        },
        setIsMobileMenuOpen: (state, action) => {
        state.isMobileMenuOpen = action.payload;
        },
        setMobileActiveMenu: (state, action) => {
        state.mobileActiveMenu = action.payload;
        },
        setMobileSubMenuTitle: (state, action) => {
        state.mobileSubMenuTitle = action.payload;
        },
        resetMobileMenu: (state) => {
        state.isMobileMenuOpen = false;
        state.mobileActiveMenu = null;
        state.mobileSubMenuTitle = null;
        }
    }
  });

  export const {
    setActiveMenu,
    setIsSearchOpen,
    setIsHelpOpen,
    setIsMobileMenuOpen,
    setMobileActiveMenu,
    setMobileSubMenuTitle,
    resetMobileMenu
  } = navbarSlice.actions;
  
  export default navbarSlice.reducer;