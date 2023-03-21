import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import OffersShimmer from './components/OffersShimmer';

const Offers = lazy(() => import('./components/Offers'));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: [<Banner key='banner' />, <Body key='main' />],
      },
      {
        path: '/offers',
        element: (
          <Suspense fallback={<OffersShimmer />}>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
