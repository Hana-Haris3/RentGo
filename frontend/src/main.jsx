import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router";
import PublicHome from './PublicHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/publichome/login';
import SignUp from './components/publichome/signup';



const appRoutes = createBrowserRouter([
  {
    path:'/',
    element:<PublicHome/>,
    children:[
      {
        path:'/login',
        element:<Login/>,
      },
      {
        path:'/signup',
        element:<SignUp/>,
      },
    
    ]
  },
  {
     path:'/admin',
    element:<PublicHome/>,
    children:[
      {
        path:'/login',
        element:<Login/>,
      },
      {
        path:'/signup',
        element:<SignUp/>,
      },
    
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
)
