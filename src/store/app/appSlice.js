import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarCollapsed: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    triggerSidebar(state) {
      debugger
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});

export const { triggerSidebar } = appSlice.actions;

export const selSidebarCollapsed = state => state.app.sidebarCollapsed

export default appSlice.reducer;
