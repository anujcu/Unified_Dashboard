import {  ICON_HIDE_NAVIGATION, ICON_ORGANIZATION_VIEW } from "../../../Constants/Constants";
import './SideNavBar.css';
import MenuList from "../../../Mocks/SideMenu.json";
import SideNavItem from "./SideNavItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu, updateBreadcrumb } from "../../../Store/Slices/sideMenuSlice";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const SideNavBar=()=>{
    const {sideMenu}=MenuList;



    //update sidemenuCollapse of not Flag in store
    const [tFlag,setTflag]=useState(false);

    //toggle Hide/Show Menu
    const dispatchSideMenuCollapseFlag=useDispatch();
    const updateCollapseFlag=()=>{
        setTflag(!tFlag)
        dispatchSideMenuCollapseFlag(toggleSideMenu(tFlag));
    }
    //make collapseable menus

       //updating header with active link
    const dispatchBreadcrumbInfo=useDispatch();
    const updateBreadcrumbHande=(item)=>{
        dispatchBreadcrumbInfo(updateBreadcrumb(item));
        }


    return(
        <div className={`SideNavBarWrapper ${tFlag?'collapsed':''}`}>
            {/* Top Fixed Link */}
            <NavLink to="/" 
    onClick={()=>updateBreadcrumbHande([ {name:"Dashboard",icon:"./src/assets/img/Icon_organizationManagement.svg"}])}
    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                      >
            <div className="SideNavBarHeading">
                <img src={ICON_ORGANIZATION_VIEW} alt="OrganizationView" className="SideNavBarHeadingIcon"/>
                <span>Dashboard</span>
                
            </div>
            </NavLink>
           
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