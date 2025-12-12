import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicHome from './PublicHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/publichome/userLogin';
import SignUp from './components/publichome/signup';
import PublicHomepage from './components/publichome/publichomePage';
import ViewAllCars from './components/common/viewallcars';
import UserHome from './userHome';
import ViewCarDetailsPage from './components/common/ViewCarDetailsPage';
import UserLogin from './components/publichome/userLogin';
import AdminLogin from './components/publichome/adminLogin';


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
      }
    ]
  },
  {
    path:('/user'),
    element:<UserHome/>
  },
 
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
)
