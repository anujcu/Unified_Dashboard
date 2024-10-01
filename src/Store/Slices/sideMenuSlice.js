import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice=createSlice({

  name:'sideMenu',
  initialState:{
    item:[
      {
        name:'Organization Menu',
        icon:"./src/assets/img/Icon_organizationManagement.svg",
      
      }
    ],
    toggleMenu:false,
  },
  reducers:{
    updateBreadcrumb:(state,action)=>{
       state.item=action.payload;
    },
    toggleSideMenu:(state,action)=>{
      state.toggleMenu=action.payload;
    }
  }
})
export const{updateBreadcrumb,toggleSideMenu}=sideMenuSlice.actions;
export default sideMenuSlice.reducer;