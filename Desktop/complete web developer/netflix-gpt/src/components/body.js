import React from 'react';
import Login from './login.js';
import Browse from './browse.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={approuter} />;
};

export default Body;
