import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicHome from './PublicHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/publichome/signup';
import PublicHomepage from './components/publichome/publichomePage';
import ViewAllCars from './components/common/viewallcars';
import ViewCarDetailsPage from './components/common/ViewCarDetailsPage';
import UserLogin from './components/publichome/userLogin';
import AdminLogin from './components/publichome/adminLogin';
import Admin from './admin';
import AddCarPage from './components/admin/adminAddcar';
import AboutUs from './components/common/aboutUs';
import AdminHome from './components/admin/adminhome';
import UserHome from './userhome';
import UserHomePage from './components/user/userHomePage';
import Authentication from './Authentication';
import AdminBookings from './components/admin/adminBookings';
import AdminViewBooking from './components/admin/adminViewBooking';
import AdminViewReview from './components/admin/adminViewReview';
import AdminReview from './components/admin/adminReview';
import UserProfile from './components/user/viewProfile';
import EditProfile from './components/user/editProfile';


const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PublicHome />,
    children: [
      {
        path: 'login/user',
        element: <UserLogin />,
      },
      {
        path: 'login/admin',
        element: <AdminLogin />
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        index: true,
        element: <PublicHomepage />
      },
      {
        path: 'cars',
        element: <ViewAllCars />
      },
      {
        path: 'cars/viewdetails',
        element: <ViewCarDetailsPage />
      },
      {
        path: 'aboutus',
        element: <AboutUs />
      }
    ]
  },
  {
    path:('/user'),
    element:<Authentication backendURL="http://localhost:3000/user/check" pageURL="/login/user" />,
    children:[
      {
        element:<UserHome/>,
        children:[
          {
            index:true,
            element:<UserHomePage/>
          },
          {
            path:'cars',
            element:<ViewAllCars/>
          },
          {
            path:'profile',
            element:<UserProfile/>
          },
          {
            path:'profile/editprofile',
            element:<EditProfile/>
          }
        ]
      } 
    ]
  },
  {
    path:('/admin'),
    element:<Authentication backendURL="http://localhost:3000/admin/check" pageURL="/login/admin"/>,
    children:[
      {
        element:<Admin/>,
        children:[
          {
            index:true,
            element:<AdminHome/>
          },
          {
            path:('addcars'),
            element:<AddCarPage/>
          },  
          {
            path: ('addcars'),
            element: <AddCarPage />
          },
          {
            path: ('bookings'),
            element: <AdminBookings />
          },
          {
            path:('viewbooking'),
            element:< AdminViewBooking />
          },
          {
            path:('reviews'),
            element:< AdminReview />
          },
          {
            path:('viewreviews'),
            element:< AdminViewReview />
          }
        ]
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
)
