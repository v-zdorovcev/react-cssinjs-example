import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import ThemeProvider from './providers/ThemeProvider';
import BikesRoute from './routes/BikesRoute';
import IndexRoute from './routes/IndexRoute';
import GlobalStyles from './theme/GlobalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <IndexRoute /> },
      { path: '/bikes', element: <BikesRoute /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
