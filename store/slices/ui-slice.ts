import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  mobileSidebarOpen: boolean;
  selectedTab: string;
  selectedRange: string;
}

const initialState: UiState = {
  mobileSidebarOpen: false,
  selectedTab: 'Overview',
  selectedRange: '6M',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileSidebar: (state) => {
      state.mobileSidebarOpen = !state.mobileSidebarOpen;
    },
    closeMobileSidebar: (state) => {
      state.mobileSidebarOpen = false;
    },
    setSelectedTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },
    setSelectedRange: (state, action: PayloadAction<string>) => {
      state.selectedRange = action.payload;
    },
  },
});

export const {
  toggleMobileSidebar,
  closeMobileSidebar,
  setSelectedTab,
  setSelectedRange,
} = uiSlice.actions;

export default uiSlice.reducer;