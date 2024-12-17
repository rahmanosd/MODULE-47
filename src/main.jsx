import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/applied",
        element: <Appliedjobs></Appliedjobs>,
        loader: () => fetch('/jobs.json') // warning: only loa the data you need.
        // do not load all the data
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => ('/jobs.json') // warning: only loa the data you need.
        // do not load all the data
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
