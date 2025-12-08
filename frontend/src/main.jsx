import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from "react-router";
import PublicHome from '../../frontend/src/publicHome.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const appRoutes = createBrowserRouter([
  {
    path:'/',
    element:<PublicHome/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}></RouterProvider>
)
