import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarCollapse: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    triggerSidebar(state) {
      state.sidebarCollapse = !sidebarCollapse;
    },
  },
});

export const { triggerSidebar } = appSlice;

export default appSlice.reducer;
