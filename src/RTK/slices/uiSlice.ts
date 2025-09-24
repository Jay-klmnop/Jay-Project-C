import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isSearchModalOpen: boolean;
}

const initialState: UiState = {
  isCartOpen: false,
  isMobileMenuOpen: false,
  isSearchModalOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    openSearchModal: (state) => {
      state.isSearchModalOpen = true;
    },
    closeSearchModal: (state) => {
      state.isSearchModalOpen = false;
    },
    toggleSearchModal: (state) => {
      state.isSearchModalOpen = !state.isSearchModalOpen;
    },
  },
});

export const {
  openCart,
  closeCart,
  toggleCart,
  openSearchModal,
  closeSearchModal,
  toggleSearchModal,
} = uiSlice.actions;

export default uiSlice.reducer;
