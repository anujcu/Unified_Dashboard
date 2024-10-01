
import SubSideNavBar from "../../Components/Common/SubSideNavBar/SubSideNavBar";
import OrganizationManagement from "../OrganizationManagement/OrganizationManagement";

const BodyContent=()=>{
    return(
        <div className="BodyContentWrapper">
             <SubSideNavBar/>
             <OrganizationManagement/>
        </div>
    )
}
export default BodyContent;