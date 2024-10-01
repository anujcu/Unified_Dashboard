
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Common/Header/Header'
import SideNavBar from './Components/Common/SideNavBar/SideNavBar'
import UserContext from './Utils/UserContext'
import { Outlet } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import appStore from './Store/appStore'

function App() {
  const [userInfo,setUserInfo]=useState([]);
  const [userRole,SetUserRole]=useState([]);

  useEffect(()=>{
    const UserData={
      userName:'Anuj Kumar',
      userRole:'Admin'
    };
    setUserInfo(UserData.userName);
    SetUserRole(UserData.userRole)
  },[])



  
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userInfo,UserRole:userRole,setUserInfo,SetUserRole}}>
    <Header/>
    <div className='bodyWrapper'>
      <SideNavBar/>
      <Outlet></Outlet>
    </div>
    </UserContext.Provider>
    </Provider>
    
  )
}

export default App
