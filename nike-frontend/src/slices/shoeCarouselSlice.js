import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeShoeIndex: 0,
  swiperKey: Math.random()
}

const shoeCarouselSlice = createSlice({
  name: 'shoeCarousel',
  initialState,
  reducers: {
    setActiveShoeIndex: (state, action) => {
      state.activeShoeIndex = action.payload
    },
    resetSwiperKey: (state) => {
      state.swiperKey = Math.random()
    }
  }
})

export const { setActiveShoeIndex, resetSwiperKey } = shoeCarouselSlice.actions
export default shoeCarouselSlice.reducer
