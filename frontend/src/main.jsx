import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router";
import PublicHome from './PublicHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/publichome/login';
import SignUp from './components/publichome/signup';
<<<<<<< HEAD
import UserHome from './userHome';
=======
import PublicHomepage from './components/publichome/publichomePage';

>>>>>>> ec66d78a7c00b6def9719435110abb7ff5e9f9a1


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
<<<<<<< HEAD
    ]
  },
  {
    path:('/user'),
    element:<UserHome/>
=======
      {
        index:true,
        // path:'/homepage',
        element:<PublicHomepage/>
      }
    ]
  },
  {
    path:'/admin',
    element:<PublicHome/>,
    children:[
      // {
      //   path:'/login',
      //   element:<Login/>,
      // },
      // {
      //   path:'/signup',
      //   element:<SignUp/>,
      // },
    
    ]
>>>>>>> ec66d78a7c00b6def9719435110abb7ff5e9f9a1
  }
  // {
  //   path:('/admin'),
  //   element:<AdminHome/>
  // }

])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
)
