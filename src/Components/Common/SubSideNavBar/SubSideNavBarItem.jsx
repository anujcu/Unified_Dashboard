import { useState } from "react";
import {  ICON_ANGLE_DOWN } from "../../../Constants/Constants"

const SubSideNavBarItem=(props)=>{
    const {subMenu}=props?.subMenuItems;
    const menuItemList=props?.subMenuItems;
     const [subMenuToggle,setSubMenuToggle]=useState(true);

    return(
        <>
        <div className='submenuRepeatItem'>
        <div className='submenuItemInfo'>
        <img src={menuItemList.menuIcon} alt="iconTask" className={menuItemList.className}/>
        <span>{menuItemList.name}</span>
        </div>
        <div className='submenuIconCollapse'>
        
        {
            menuItemList.isBadge?<span>8</span>:            
                subMenu.length==0?'': <img onClick={()=>setSubMenuToggle(!subMenuToggle)} src={ICON_ANGLE_DOWN} alt="collapsesubMenu" className="angleDownSubMenu"/>
             
            
        }
        
        </div>
     </div>
        {   subMenuToggle?subMenu.map((subItem,index)=><div key={index} className="subMenuChildLinks">{subItem.name}</div>):''
        }
   
</> 
        
    )
}
export default SubSideNavBarItem;

