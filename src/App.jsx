
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Common/Header/Header'
import SideNavBar from './Components/Common/SideNavBar/SideNavBar'
import UserContext from './Utils/UserContext'
import BodyContent from './Components/BodyContent/BodyContent'

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
    
    <UserContext.Provider value={{loggedInUser:userInfo,UserRole:userRole,setUserInfo,SetUserRole}}>
    <Header/>
    <div className='bodyWrapper'>
      <SideNavBar/>
      <BodyContent/>
    
    </div>
    </UserContext.Provider>
    
  )
}

export default App
