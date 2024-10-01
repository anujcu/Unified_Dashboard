import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Role from './Components/Role/Role.jsx'
import ErrorComponent from './Components/Common/ErrorComponent/ErrorComponent.jsx'

//lazy loading/ chunking
const OrganizationManagement=lazy(()=>
  import("./Components/OrganizationManagement/OrganizationManagement.jsx"));
const Dashboard=lazy(()=>
  import("./Components/Dashboard/Dashboard.jsx"));

const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Suspense fallback={<h1>Loading Page...</h1>}><Dashboard/></Suspense>
        },
        {
          path:"/organization",
          element:<Suspense fallback={<h1>Loading Page...</h1>}><OrganizationManagement/></Suspense>
        },
        {
          path:"/role",
          element:<Role/>
        }
      ],
      errorElement:<ErrorComponent/>
    }
  
  ]
)


createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter}>
  <StrictMode>
     <App/>
  </StrictMode>
</RouterProvider>
)
