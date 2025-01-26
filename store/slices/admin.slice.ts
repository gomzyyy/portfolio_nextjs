import { blogType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type adminSlice = {
  admin: any;
  count: number;
  allBlogs: blogType[];
  adminBlogs: blogType[];
  singleBlog:blogType | undefined;
};

const adminState: adminSlice = {
  admin: undefined,
  count: 0,
  allBlogs: [],
  adminBlogs: [],
  singleBlog:undefined
};

const adminSlice = createSlice({
  name: "admin",
  initialState: adminState,
  reducers: {
    setAdmin: (state, action: PayloadAction<any>) => {
      state.admin = action.payload;
    },
    removeAdmin: (state) => {
      state.admin = undefined;
    },
    setAllBlogs: (state, action: PayloadAction<blogType[]>) => {
      state.allBlogs = action.payload;
    },
    clearAllBlogs:(state) => {
      state.allBlogs = [];
    },
    setAdminBlogs: (state, action: PayloadAction<blogType[]>) => {
      state.adminBlogs = action.payload;
    },
    clearAdminBlogs:(state) => {
      state.adminBlogs = [];
    },
    setSingleBlog: (state,action: PayloadAction<blogType>)=>{
      state.singleBlog = action.payload;
    },
    clearSingleBlog: (state,action: PayloadAction<blogType>)=>{
      state.singleBlog = undefined;
    },
    setCount: (state) => {
      state.count += 1;
    },
  },
});

export default adminSlice.reducer;
export const { setAdmin, setCount, removeAdmin,setAllBlogs,setAdminBlogs,clearAdminBlogs,clearAllBlogs,clearSingleBlog } = adminSlice.actions;
