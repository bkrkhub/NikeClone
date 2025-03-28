import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showFilters: true,
  isDropdownOpen: false,
  pickUpEnabled: false,
  mobileDrawerOpen: false,
  sortBy: 'Featured',
  expandedPrice: false,
  selectedFilters: {},
  openSections: {},
}

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setShowFilters: (state, action) => {
      state.showFilters = action.payload;
    },
    setDropdownOpen: (state, action) => {
        state.isDropdownOpen = action.payload;
    },
    togglePickup: (state) => {
      state.pickUpEnabled = !state.pickUpEnabled;
    },
    toggleMobileDrawer: (state) => {
      state.mobileDrawerOpen = !state.mobileDrawerOpen;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    toggleExpandedPrice: (state) => {
      state.expandedPrice = !state.expandedPrice;
    },
    toggleFilterOption: (state, action) => {
      const { group, option } = action.payload;
      const selected = state.selectedFilters[group] || [];
      const already = selected.includes(option);
    
      state.selectedFilters[group] = already
        ? selected.filter((item) => item !== option)
        : [...selected, option];
    },
    toggleSection: (state, action) => {
      const label = action.payload;
      state.openSections[label] = !state.openSections[label];
    },
  }
})

export const {
  setShowFilters,
  setDropdownOpen,
  togglePickup,
  toggleMobileDrawer,
  setSortBy,
  toggleExpandedPrice,
  toggleFilterOption,
  toggleSection
} = shopSlice.actions;

export default shopSlice.reducer