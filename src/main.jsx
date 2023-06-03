import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Main from './layouts/Main';
import Product from './components/Product';
import MyCollection from './components/MyCollection';
import WishList from './components/WishList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/product",
        element: <Product></Product>
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>
      },
      {
        path: "/myCollection",
        element: <MyCollection></MyCollection>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
