import { NavLink } from "react-router-dom";
import { ICON_ANGLE_DOWN,ICON_ORGANIZATION_MANAGAMENT } from "../../../Constants/Constants";
import { useDispatch } from "react-redux";
import {  updateBreadcrumb } from "../../../Store/Slices/sideMenuSlice";
import { useEffect, useState } from "react";

const SideNavItem=(props)=>{

    //updating header with active link
    const dispatchBreadcrumbInfo=useDispatch();
    const updateBreadcrumbHande=(item)=>{
        dispatchBreadcrumbInfo(updateBreadcrumb(item));
        }
    
        //handle Collapse Menu Items
   
        const [toggleMenu,setToggleMenu]=useState(false)
  
  

     const menuItems=props;
     const SubmenuItems=menuItems.menuItems.subMenu;
    return(
        <div className="sideManuItemWrapper">
        <div className="sideMenuItem">
            <div className="sideMenuItemInfo">
            <img src={menuItems.menuItems.menuIcon} alt="IconOrganization" className={menuItems.menuItems.className}/>
            <span>{menuItems.menuItems.name}</span>
            
            </div>
            {
                SubmenuItems.length==0?'':<button 
                className={`sideMenuItemToggleIconBtn ${ toggleMenu?'':'normal'}`}
                 onClick={()=>setToggleMenu(!toggleMenu)}>
                <img src={ICON_ANGLE_DOWN} alt="menuItems.menuItems.name" className="sideMenuItemToggleIcon" />
                </button>
            }
            
        </div>
        {    
              SubmenuItems.length==0?'':
              <div className={`sideMenuItemSubItemList ${toggleMenu?'show':'hide'}`}>
              {
                   SubmenuItems.map((item)=>
                   {
                    return <NavLink to={item.linkTo}  
                    key={item.name} 
                    onClick={()=>updateBreadcrumbHande([ {name:item.name,icon:item.iconName
                      }])}
                     className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    <p className="sideMenuItemSubItem">{item.name}</p></NavLink> 
                   })
              }
                </div>
        }
      
        
        </div>
    )
}
export default SideNavItem;