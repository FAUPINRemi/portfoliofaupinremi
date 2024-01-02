import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Portfolio from './portfolio';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
    
  },
  {
    path: "portfolio",
    element: <Portfolio/>
    
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
