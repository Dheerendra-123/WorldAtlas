import React from 'react'
import Home from './pages/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About';
import Country from './pages/Country';
import Contact from './pages/Contact';
import AppLayout from './Components/Layout/AppLayout';
import Error from './pages/Error';
import CountryDetails from './Components/Layout/CountryDetails';

const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  }
  
]);

const App = () => {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
};

export default App