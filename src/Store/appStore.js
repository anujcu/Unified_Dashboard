import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./Slices/sideMenuSlice";

const appStore=configureStore(
  {
    reducer:{
      sideMenu:sideMenuSlice
    }
  }
)
export default appStore;