import { ICON_ANGLE_DOWN } from "../../../Constants/Constants";

const SideNavItem=(props)=>{
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
                     return <p key={item.name} className={`sideMenuItemSubItem ${item.isActive?'active':''}`}>{item.name}</p>
                   })
              }
          </div>
        }
      
        
        </div>
    )
}
export default SideNavItem;