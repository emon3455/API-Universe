import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import RestCountrys from './Component/RestCountrys/RestCountrys';
import MealDV from './Component/MealDB/MealDV';
import SporstDB from './Component/SportsDB/SporstDB';
import Contact from './Component/Contact/Contact';
import Error from './Component/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/restCountry",
        element: <RestCountrys/>
      },
      {
        path: "/mealDb",
        element: <MealDV></MealDV>
      },
      {
        path: "/sportsDb",
        element: <SporstDB></SporstDB>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "*",
        element: <Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
