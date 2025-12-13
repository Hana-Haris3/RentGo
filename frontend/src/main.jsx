import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicHome from './PublicHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/publichome/userLogin';
import SignUp from './components/publichome/signup';
import PublicHomepage from './components/publichome/publichomePage';
import ViewAllCars from './components/common/viewallcars';
import ViewCarDetailsPage from './components/common/ViewCarDetailsPage';
<<<<<<< HEAD
import UserLogin from './components/publichome/userLogin';
import AdminLogin from './components/publichome/adminLogin';
import Admin from './admin';
import AdminHome from './components/admin/adminhome';
import AddCarPage from './components/admin/adminAddcar';
=======
import AboutUs from './components/common/aboutUs';
import Admin from './admin';
import AdminHome from './components/admin/adminhome';
import UserHome from './userHome';
import UserHomePage from './components/user/userHomePage';
import CarBooking from './components/user/carBooking';




>>>>>>> 263a189dc0777a6f555bfc71adbad8989677185d

const appRoutes = createBrowserRouter([
  {
    path:'/',
    element:<PublicHome/>,
    children:[
      {
        path:'login/user',
        element:<UserLogin/>,
      },
      {
        path:'login/admin',
        element:<AdminLogin/>
      },
      {
        path:'signup',
        element:<SignUp/>,
      },
      {
        index:true,
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
<<<<<<< HEAD
    element:<UserHome/>
  },
 

=======
    element:<UserHome/>,
    children:[
      {
        index:true,
        element:<UserHomePage/>
      },
    ]
  },
>>>>>>> 263a189dc0777a6f555bfc71adbad8989677185d
  {
    path:('/admin'),
    element:<Admin/>,
    children:[
      {
        index:true,
        element:<AdminHome/>
      },
      {
        path:('/admin/addcars'),
        element:<AddCarPage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
)
