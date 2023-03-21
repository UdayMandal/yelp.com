
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/bootstrapwidthheight.scss';
import './css/yelp.scss';
import '@master/keyframes.css'


import React from "react";
import { createRoot } from 'react-dom/client';
import '@master/css'
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './root';
import Home from './routes/Home';
import Restaurants from './routes/Restaurants';
import HomeServices from './routes/HomeServices';
import AutoServices from './routes/AutoServices';
import More from './routes/More';
import ForBusiness from './routes/ForBusiness';
import WriteReview from './routes/WriteReview';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import { Provider } from 'react-redux';
import store from './store/store'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'restaurants',
        element: <Restaurants /> 
      },
      {
        path: 'home-services',
        element: <HomeServices /> 
      },
      {
        path: 'auto-services',
        element: <AutoServices /> 
      },

      {
        path: 'more',
        element: <More /> 
      },

      {
        path: 'for-business',
        element: <ForBusiness /> 
      },

      {
        path: 'write-review',
        element: <WriteReview /> 
      },

    ]
  },
  {
    path: 'login',
    element: <Login /> 
  },

  {
    path: 'signup',
    element: <SignUp /> 
  },

]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
