import React, {  } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Home from './components/Home/home';
import Statistics from './components/Statistics/Statistics';
import Jobdetails from './components/Jobdetails/Jobdetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/appliedjobs",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/job/:id",
        element: <Jobdetails></Jobdetails>,
        loader: () => fetch("../../job.json")
      }
     
    ]
  }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
