import { useContext } from "react";
import { LOGO_IMG,ICON_ORGANIZATION_MANAGAMENT,ICON_HELP,ICON_SUPPORT,ICON_HEADER_MENU } from "../../../Constants/Constants";
import './Header.css'
import UserContext from "../../../Utils/UserContext";


const Header =()=>{

   const {loggedInUser,UserRole}= useContext(UserContext)
    return(
       <div className="HeaderWrapper">
        <div className="HeaderLeft">
            <div className="HeaderLogo">
                <img src={LOGO_IMG} alt="logo" className="logoImage"/>
                <span>ScientificStudy</span>
            </div>
            <div className="Breadcrumb">
                <img src={ICON_ORGANIZATION_MANAGAMENT} alt="orgIcon"/>
                <span> Member and Department</span>
            </div>
           
        </div>
        <div className="HeaderRight">
        <button className="HeaderButtonSupport">
              <img src={ICON_SUPPORT} alt="HeaderButtonSupport" className="HeaderButtonSupportImg"/>
          </button>
          <button className="HeaderButtonHelp">
             <img src={ICON_HELP} alt="HeaderButtonHelp"  className="HeaderButtonHelpImg"/>
          </button>
          <div className="HeaderButtonMenuWrapper">
          <button className="HeaderButtonMenu">
              <img src={ICON_HEADER_MENU} alt="HeaderButtonMenu" className="HeaderButtonMenuImg"/>
          </button>
          </div>
          <div className="HeaderUserDetails">
            <span className="HeaderUSerDetailsNameLabel">AS</span>
            <div className="HeaderUserDetailsInfo">
                <p className="HeaderUserDetailsInfoTitle">{loggedInUser}</p>
                <span className="HeaderUserDetailsInfoRole">{UserRole}</span>
            </div>
          </div>
        </div>
       </div>
    )
}
export default Header;