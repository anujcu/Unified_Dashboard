import {  ICON_HIDE_NAVIGATION, ICON_ORGANIZATION_VIEW } from "../../../Constants/Constants";
import './SideNavBar.css';
import MenuList from "../../../Mocks/SideMenu.json";
import SideNavItem from "./SideNavItem";


const SideNavBar=()=>{
    const {sideMenu}=MenuList;
    return(
        <div className="SideNavBarWrapper">
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
            <div className="SideNavBarFooterItem">
                    <img src={ICON_HIDE_NAVIGATION} alt="IconCollapseSideMenu" className="IconCollapseSideMenu"/>
                    <span>Hide Navigation</span>
                </div>
            </div>
        </div>
    )
}
export default SideNavBar;