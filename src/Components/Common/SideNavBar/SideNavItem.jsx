import { NavLink } from "react-router-dom";
import { ICON_ANGLE_DOWN } from "../../../Constants/Constants";

const SideNavItem=(props,{toggleSideNavbar})=>{
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
                SubmenuItems.length==0?'':<button className="sideMenuItemToggleIconBtn">
                <img src={ICON_ANGLE_DOWN} alt="IconOrganization" className="sideMenuItemToggleIcon"/>
                </button>
            }
            
        </div>
        {
              SubmenuItems.length==0?'':<div className="sideMenuItemSubItemList">
              {
                   SubmenuItems.map((item)=>
                   {
                     return <NavLink to={item.linkTo}  key={item.name}
                     className={({ isActive }) => (isActive ? 'active' : 'inactive')}><p  className="sideMenuItemSubItem">{item.name}</p></NavLink> 
                   })
              }
          </div>
        }
      
        
        </div>
    )
}
export default SideNavItem;