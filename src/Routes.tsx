import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

const routerTree = createBrowserRouter([
  {
    path: '/', // tracks the BrowserURL state
    element: <App />, // provide the corresponding component
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // tracks the BrowserURL state
        element: <HomePage />, // provide the corresponding component
      },
      {
        path: 'products', // tracks the BrowserURL state
        element: <ProductsPage />, // provide the corresponding component
      },
      {
        path: 'products/:id', // tracks the BrowserURL state   // id = 2
        element: <ProductPage />, // provide the corresponding component
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={routerTree} />;
}
