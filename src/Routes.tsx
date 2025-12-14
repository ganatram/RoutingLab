import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { Header } from './Header';
import { App } from './App';

const routerTree = createBrowserRouter([
  {
    path: '/', // tracks the BrowserURL state
    element: <App />, // provide the corresponding component
    children: [
      // nested route
      {
        path: 'products', // tracks the BrowserURL state
        element: <ProductsPage />, // provide the corresponding component
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={routerTree} />;
}
