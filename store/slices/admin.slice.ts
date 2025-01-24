import { createSlice } from "@reduxjs/toolkit";

const adminState: { admin: any; count: number } = {
  admin: undefined,
  count: 0,
};

const adminSlice = createSlice({
  name: "admin",
  initialState: adminState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setCount: (state) => {
      state.count += 1;
    },
  },
});

export default adminSlice.reducer;
export const { setAdmin, setCount } = adminSlice.actions;
