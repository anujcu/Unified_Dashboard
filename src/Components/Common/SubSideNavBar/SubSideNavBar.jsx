import { ICON_ANGLE_DOWN, ICON_ANGLE_DOWN_SOLID, ICON_PLUS, ICON_SUB_TASK, ICON_TASK_LIST, ICON_TASKS, ICON_THREEDOTS } from '../../../Constants/Constants';
import './SubSideNavBar.css';
import subMenuList from "../../../Mocks/SubSideNavBar.json";
import SubSideNavBarItem from './SubSideNavBarItem';
import { useState } from 'react';

const SubSideNavBar=()=>{

    const {subMenuItems}=subMenuList;
    const taskList=[
        {
            taskName:'Zone-1 : West Bengal',
            subTask:[{subTaskName:'NCS Kochi'},{subTaskName:'NCS Kochi'}]
        },
        {
            taskName:'Zone-2 : Uttar Pradesh',
            subTask:[{subTaskName:'NCS Merrut'},{subTaskName:'NCS Noida'}]
        }
    ];
    //collapseable task
 const [toggleSubMenu, setToggleSumbmenu]=useState(true);
  
    return(
        <div className={`SubSideNavBar ${toggleSubMenu?'':'collapsed'}`}>
           <div className="SubSideNavBarHeading">
            <div className="SubSideNavBarHeadingInfo">
            <img src={ICON_TASKS} alt="iconTask" className="subMenuIconTasks"/>
                <span>Tasks</span>
            </div>
            <div className="SubSideNavBarHeadingRight">
                <div className='moreOptionWrapper'>
                    <button className='subSideMenuMoreOptions'>
                    <img src={ICON_THREEDOTS} alt="subMenuThreeDots" className="subMenuThreeDots"/>
                    </button>
                    <div className="moreOptionsWrapper"></div>
                </div>
                {/* Menu Collapse Button */}
               <button className='collapsesubMenu' onClick={()=>setToggleSumbmenu(!toggleSubMenu)}>
               <img src={ICON_ANGLE_DOWN} alt="collapsesubMenu" className="sideMenuItemToggleIcon"/>
               </button>
            </div>
           </div>
           <div className='submenuRepeatItemWrapper'>
           {
            subMenuItems.length==0?'':subMenuItems.map((item)=><SubSideNavBarItem key={item.id} subMenuItems={item}/>)  
           }
           </div>
           <div className="subSideMenuAddTaskHeading">
            <div className="SubSideNavBarHeadingInfo">
            <img src={ICON_TASK_LIST} alt="iconTask" className="subMenuIconTasks"/>
                <span>Tasks List</span>
            </div>
            <button className='subSideMenuAddTaskButton'>
                    <img src={ICON_PLUS} alt="subMenuThreeDots" className="subMenuPlus"/>
             </button>
           </div>
           <div className='taskItemsWrapper'>
           {
          
          taskList.map((item,index)=>  <div key={index} className='itemTaskNameWrapper'> 
          <div className='itemTaskName'>
          <img src={ICON_ANGLE_DOWN_SOLID} alt="subMenuThreeDots" className="subMenuPlus" />
          <span>{item.taskName}</span>
          </div>
        
          {
     
              item.subTask.map((items,index)=>
                  <div  key={index} className='itemSubTaskName'>
                  <img src={ICON_SUB_TASK} alt="subMenuThreeDots" className="subMenuPlus"/>
                  <span>{items.subTaskName}</span>
                  </div>
              )
          }
          
           </div>)
         }
           </div>
          
        </div>
    )
}
export default SubSideNavBar;