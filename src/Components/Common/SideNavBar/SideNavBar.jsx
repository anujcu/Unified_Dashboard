import {  ICON_HIDE_NAVIGATION, ICON_ORGANIZATION_VIEW } from "../../../Constants/Constants";
import './SideNavBar.css';
import MenuList from "../../../Mocks/SideMenu.json";
import SideNavItem from "./SideNavItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../../../Store/Slices/sideMenuSlice";
import { useState } from "react";


const SideNavBar=()=>{
    const {sideMenu}=MenuList;

   //subscribing a store
   //const sideMenuItem=useSelector((store)=>store.sideMenu.toggle);

    //update sidemenuCollapse of not Flag in store
    const [tFlag,setTflag]=useState(false);

    //toggle Hide/Show Menu
    const dispatchSideMenuCollapseFlag=useDispatch();
    const updateCollapseFlag=()=>{
        setTflag(!tFlag)
        dispatchSideMenuCollapseFlag(toggleSideMenu(tFlag));
    }
    //make collapseable menus


    return(
        <div className={`SideNavBarWrapper ${tFlag?'collapsed':''}`}>
            <div className="SideNavBarHeading">
                <img src={ICON_ORGANIZATION_VIEW} alt="OrganizationView" className="SideNavBarHeadingIcon"/>
                <span>Organization View</span>
                
            </div>
            <div className="SideNavBarBody">
            {
                sideMenu.map((item)=><SideNavItem key={item.id} menuItems={item}/>)
            }
            </div>
            <div className="SideNavBarFooter">
            <div className="SideNavBarFooterItem" onClick={updateCollapseFlag} >
                    <img src={ICON_HIDE_NAVIGATION} alt="IconCollapseSideMenu"  className="IconCollapseSideMenu"/>
                    <span>Hide Navigation</span>
                </div>
            </div>
        </div>
    )
}
export default SideNavBar;