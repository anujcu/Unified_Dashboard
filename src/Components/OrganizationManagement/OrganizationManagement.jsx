import { useSelector } from "react-redux";
import { ICON_ACTIVE_BADGE, ICON_ADD, ICON_CANCEL_BADGE, ICON_FILTER_OPTION, ICON_INVITE_MEMBER, ICON_INVITED_BADGE, ICON_TABLE_SORTING } from "../../Constants/Constants";
import SubSideNavBar from "../Common/SubSideNavBar/SubSideNavBar";
import './OrganizationManagement.css';

const OrganizationManagement=()=>{
    //get the class name when sidemenu is collapsed
  const toggleMenuFlag=useSelector((store)=>store.sideMenu.toggleMenu);

    return(
        <div className={`BodyContentWrapper ${toggleMenuFlag?'':'menuCollapsed'}`}>
            <SubSideNavBar/>
        <div className="organizationManagementPage">
      
      <div className="tabDesignHeader">
        <button className="active">Members</button>
        <button>Departments</button>
        <button>Deleted Members</button>
      </div>
      <div className="tabDesignBody">
             {/* Badges Design */}
            <div className="badgesContainer">
                <div className="badgeItem color-theme">
                    <span className="badgeItemLabel">User</span>
                    <span className="badgeItemValue">6</span>
                </div>
                <div className="badgeItem color-green">
                    <span className="badgeItemLabel">Invited User</span>
                    <span className="badgeItemValue">5</span>
                </div>
            </div>
            {/* Table Filters */}
            <div className="tableDesignFiltersWrapper">
                <div className="tableDesignFiltersLeft">
                    <select className="tableDesignFilterItem tableDesignFilterDropdown">
                        <option>All</option>
                    </select>
                    <select className="tableDesignFilterItem tableDesignFilterDropdown">
                        <option>Exclude member of sub-departments</option>
                    </select>
                </div>
                <div className="tableDesignFiltersRight">
                    <div className="tableDesignFilter_MoreOption">
                        <button className="tableFilterMoreOption">
                        <img src={ICON_FILTER_OPTION} alt="MoreOption" className="MoreOptionIMG"/>
                        </button>
                        <div className="tableDesignFilter_MoreOptionVal"></div>
                    </div>
                    <button className="tabFilterBtn Btn_Secondary"> 
                    <img src={ICON_INVITE_MEMBER} alt="tabFilterBtnINVM" className="tabFilterBtnINVMIMG"/>
                        <span>Invite Members</span>
                    </button>
                    <button className="tabFilterBtn Btn_Primary"> 
                    <img src={ICON_ADD} alt="tabFilterBtnAdd" className="tabFilterBtnADDIMG"/>
                        <span>Add Members</span>
                    </button>
                </div>
            </div>
            {/* Table Component */}
          <div className="tableWrapper">
            <div className="tableHeader">
                <div className="tableCol">
                    <div className="checkboxWrapper">
                        <label color="checkBox1">
                            <input type="checkbox" id="checkBox1" className="checkBoxInput"/>
                            <span className="checkBoxIcon"></span>
                        </label>
                    </div>
                </div>
                <div className="tableCol">
                    <span className="tableColHeading">Name</span>
                    <button className="tableColsortIcon">
                    <img src={ICON_TABLE_SORTING} alt="MoreOption" className="tableSortingIcon"/>
                    </button>
                </div>
                <div className="tableCol">
                    <span className="tableColHeading">Status</span>
                    <button className="tableColsortIcon">
                    <img src={ICON_TABLE_SORTING} alt="MoreOption" className="tableSortingIcon"/>
                    </button>
                </div>
                <div className="tableCol">
                    <span className="tableColHeading">Contact Email</span>
                    <button className="tableColsortIcon">
                    <img src={ICON_TABLE_SORTING} alt="MoreOption" className="tableSortingIcon"/>
                    </button>
                </div>
                <div className="tableCol">
                    <span className="tableColHeading">Department</span>
                    <button className="tableColsortIcon">
                    <img src={ICON_TABLE_SORTING} alt="MoreOption" className="tableSortingIcon"/>
                    </button>
                </div>
                <div className="tableCol">
                    <span className="tableColHeading">Actions</span>
                </div>
            </div>
            <div className="tableBody">
                <div className="tableBodyRow">
                <div className="tableBodyCell">
                <div className="checkboxWrapper">
                        <label color="checkBox2">
                            <input type="checkbox" id="checkBox2" className="checkBoxInput"/>
                            <span className="checkBoxIcon"></span>
                        </label>
                    </div>
                </div>
                <div className="tableBodyCell">
                    <div className="circularTextClip color1">4th</div>
                    <span className="tableBodyCellValue">4th Member</span>
                </div>
                <div className="tableBodyCell">
                    <span className="tableBodyCellBadge badgeInvited">
                    <img src={ICON_INVITED_BADGE} alt="iconInvitedBadge" className="tabFilterBtnADDIMG"/> Invited
                    </span>
                    <button className="tableBodyCellLink">Remind</button>
                </div>
                <div className="tableBodyCell">
                 <span className="tableBodyCellValue">anujcu@gmail.com</span>
                </div>
                <div className="tableBodyCell">
                <span className="tableBodyCellValue">Admin</span>
                </div>
                <div className="tableBodyCell">
                    <button className="tableBodyAction actionDelete">Delete</button>
                    <button className="tableBodyAction actionEdit">Edit</button>
                    <button className="tableBodyAction actionView">View</button>
                </div>
                </div>
                <div className="tableBodyRow">
                <div className="tableBodyCell">
                <div className="checkboxWrapper">
                        <label color="checkBox2">
                            <input type="checkbox" id="checkBox2" className="checkBoxInput"/>
                            <span className="checkBoxIcon"></span>
                        </label>
                    </div>
                </div>
                <div className="tableBodyCell">
                    <div className="circularTextClip color2">4th</div>
                    <span className="tableBodyCellValue">4th Member</span>
                </div>
                <div className="tableBodyCell">
                    <span className="tableBodyCellBadge badgeInvited">
                    <img src={ICON_INVITED_BADGE} alt="iconInvitedBadge" className="tabFilterBtnADDIMG"/> Invited
                    </span>
                </div>
                <div className="tableBodyCell">
                 <span className="tableBodyCellValue">anujcu@gmail.com</span>
                </div>
                <div className="tableBodyCell">
                <span className="tableBodyCellValue">Admin</span>
                </div>
                <div className="tableBodyCell">
                    <button className="tableBodyAction actionDelete">Delete</button>
                    <button className="tableBodyAction actionEdit">Edit</button>
                    <button className="tableBodyAction actionView">View</button>
                </div>
                </div>
                <div className="tableBodyRow">
                <div className="tableBodyCell">
                <div className="checkboxWrapper">
                        <label color="checkBox2">
                            <input type="checkbox" id="checkBox2" className="checkBoxInput"/>
                            <span className="checkBoxIcon"></span>
                        </label>
                    </div>
                </div>
                <div className="tableBodyCell">
                    <div className="circularTextClip color3">4th</div>
                    <span className="tableBodyCellValue">4th Member</span>
                </div>
                <div className="tableBodyCell">
             
                    <span className="tableBodyCellBadge badgeCancel">
                    <img src={ICON_CANCEL_BADGE} alt="iconInvitedBadge" className="tabFilterBtnADDIMG"/> Cancel
                    </span>
                </div>
                <div className="tableBodyCell">
                 <span className="tableBodyCellValue">anujcu@gmail.com</span>
                </div>
                <div className="tableBodyCell">
                <span className="tableBodyCellValue">Admin</span>
                </div>
                <div className="tableBodyCell">
                    <button className="tableBodyAction actionDelete">Delete</button>
                    <button className="tableBodyAction actionEdit">Edit</button>
                    <button className="tableBodyAction actionView">View</button>
                </div>
                </div>
                <div className="tableBodyRow">
                <div className="tableBodyCell">
                <div className="checkboxWrapper">
                        <label color="checkBox2">
                            <input type="checkbox" id="checkBox2" className="checkBoxInput"/>
                            <span className="checkBoxIcon"></span>
                        </label>
                    </div>
                </div>
                <div className="tableBodyCell">
                    <div className="circularTextClip color4">4th</div>
                    <span className="tableBodyCellValue">4th Member</span>
                </div>
                <div className="tableBodyCell">
                    <span className="tableBodyCellBadge badgeActive">
                    <img src={ICON_ACTIVE_BADGE} alt="iconInvitedBadge" className="tabFilterBtnADDIMG"/> Active
                    </span>
                   
                </div>
                <div className="tableBodyCell">
                 <span className="tableBodyCellValue">anujcu@gmail.com</span>
                </div>
                <div className="tableBodyCell">
                <span className="tableBodyCellValue">Admin</span>
                </div>
                <div className="tableBodyCell">
                    <button className="tableBodyAction actionDelete">Delete</button>
                    <button className="tableBodyAction actionEdit">Edit</button>
                    <button className="tableBodyAction actionView">View</button>
                </div>
                </div>
                <div className="tableBodyRow">
                <div className="tableBodyCell">
                <div className="checkboxWrapper">
                        <label color="checkBox2">
                            <input type="checkbox" id="checkBox2" className="checkBoxInput"/>
                            <span className="checkBoxIcon"></span>
                        </label>
                    </div>
                </div>
                <div className="tableBodyCell">
                    <div className="circularTextClip color5">4th</div>
                    <span className="tableBodyCellValue">4th Member</span>
                </div>
                <div className="tableBodyCell">
                    <span className="tableBodyCellBadge badgeInvited">
                    <img src={ICON_INVITED_BADGE} alt="iconInvitedBadge" className="tabFilterBtnADDIMG"/> Invited
                    </span>
                    <button className="tableBodyCellLink">Remind</button>
                </div>
                <div className="tableBodyCell">
                 <span className="tableBodyCellValue">anujcu@gmail.com</span>
                </div>
                <div className="tableBodyCell">
                <span className="tableBodyCellValue">Admin</span>
                </div>
                <div className="tableBodyCell">
                    <button className="tableBodyAction actionDelete">Delete</button>
                    <button className="tableBodyAction actionEdit">Edit</button>
                    <button className="tableBodyAction actionView">View</button>
                </div>
                </div>
            </div>
          </div>
      </div>
        </div>
        </div>
        
    )
}
export default OrganizationManagement;