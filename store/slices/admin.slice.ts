import { createSlice } from "@reduxjs/toolkit";

const adminState:{admin:any}={
    admin:undefined
}

const adminSlice = createSlice({
    name:"admin",
    initialState:adminState,
    reducers:{
        setAdmin:()=>{},
    }
})

export default adminSlice.reducer;
export const {setAdmin} = adminSlice.actions;