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
   
        const [toggleMenu,setToggleMenu]=useState(0)
        const handleTogleMenu=(i)=>{
            console.log('toggleMenu before',toggleMenu);
           if(toggleMenu==i){
            setToggleMenu(0);
           }
           setToggleMenu(i);
           console.log('toggleMenu after',toggleMenu);
           console.log('Props VAlue',props.index);
       }  
  

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
                className={`sideMenuItemToggleIconBtn ${ toggleMenu==props.index?'':'normal'}`}
                 onClick={()=>handleTogleMenu(props.index)}>
                <img src={ICON_ANGLE_DOWN} alt="menuItems.menuItems.name" className="sideMenuItemToggleIcon" />
                </button>
            }
            
        </div>
        {    
              SubmenuItems.length==0?'':
              <div className={`sideMenuItemSubItemList ${toggleMenu==props.index?'show':'hide'}`}>
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