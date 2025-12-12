import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router";
import PublicHome from './PublicHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/publichome/login';
import SignUp from './components/publichome/signup';
import PublicHomepage from './components/publichome/publichomePage';
import ViewAllCars from './components/common/viewallcars';
import ViewCarDetailsPage from './components/common/ViewCarDetailsPage';
import AboutUs from './components/common/aboutUs';
import Admin from './admin';
import AdminHome from './components/admin/adminhome';
import UserHome from './userHome';
import UserHomePage from './components/user/userHomePage';
import CarBooking from './components/user/carBooking';





const appRoutes = createBrowserRouter([
  {
    path:'/',
    element:<PublicHome/>,
    children:[
      {
        path:'login',
        element:<Login/>,
      },
      {
        path:'signup',
        element:<SignUp/>,
      },
      {
        index:true,
        // path:'/homepage',
        element:<PublicHomepage/>
      },
      {
        path:'cars',
        element:<ViewAllCars/>
      },
      {
        path:'cars/viewdetails',
        element:<ViewCarDetailsPage/>
      },
      {
        path:'aboutus',
        element:<AboutUs/>
      }

      
    ]
  },
  {
    path:('/user'),
    element:<UserHome/>,
    children:[
      {
        index:true,
        element:<UserHomePage/>
      },
    ]
  },
  {
    path:('/admin'),
    element:<Admin/>,
    children:[
      {
        index:true,
        element:<AdminHome/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
)
