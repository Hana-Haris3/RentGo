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
<<<<<<< HEAD
import CarBooking from './components/user/carBooking';
=======
import Authentication from './Authentication';
>>>>>>> d9d20a3677085bbc16bb51c94d66ec16a97dc3a0
import AdminBookings from './components/admin/adminBookings';
import AdminViewBooking from './components/admin/adminViewBooking';
import AdminViewReview from './components/admin/adminViewReview';
import AdminReview from './components/admin/adminReview';
<<<<<<< HEAD
// import CarBooking from './components/user/carBooking';
=======
>>>>>>> d9d20a3677085bbc16bb51c94d66ec16a97dc3a0
import UserProfile from './components/user/viewProfile';
import EditProfile from './components/user/editProfile';


<<<<<<< HEAD

=======
>>>>>>> d9d20a3677085bbc16bb51c94d66ec16a97dc3a0
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
<<<<<<< HEAD
    path: ('/user'),
    element: <UserHome />,
       children: [                         
=======
    path:('/user'),
    element:<Authentication backendURL="http://localhost:3000/user/check" pageURL="/login/user" />,
    children:[
>>>>>>> d9d20a3677085bbc16bb51c94d66ec16a97dc3a0
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
