import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import HiFiWireframe from './pages/HiFiWireframe';
import HiFiWireframeCart from './pages/HiFiWireframeCart';
import HiFiWireframeCheckout from './pages/HiFiWireframeCheckout';
import HiFiWireframePayment from './pages/HiFiWireframePayment';
import HiFiWireframePayment1 from './pages/HiFiWireframePayment1';
import HiFiWireframeProduct from './pages/HiFiWireframeProduct';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/HiFiWireframe', element: <HiFiWireframe /> },
{ path: '/HiFiWireframeCart', element: <HiFiWireframeCart /> },
{ path: '/HiFiWireframeCheckout', element: <HiFiWireframeCheckout /> },
{ path: '/HiFiWireframePayment', element: <HiFiWireframePayment /> },
{ path: '/HiFiWireframePayment1', element: <HiFiWireframePayment1 /> },
{ path: '/HiFiWireframeProduct', element: <HiFiWireframeProduct /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}