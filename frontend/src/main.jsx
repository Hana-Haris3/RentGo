import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router";
import PublicHome from './PublicHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/publichome/login';
import SignUp from './components/publichome/signup';
import PublicHomepage from './components/publichome/publichomePage';
import ViewAllCars from './components/common/viewallcars';
import UserHome from './userHome';



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
      {
        index:true,
        // path:'/homepage',
        element:<PublicHomepage/>
      },
      {
        path:'/cars',
        element:<ViewAllCars/>
      }
    ]
  },
  {
    path:('/user'),
    element:<UserHome/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
)
