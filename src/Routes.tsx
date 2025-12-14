import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { Header } from './Header';

const routerTree = createBrowserRouter([
  {
    path: '/', // tracks the BrowserURL state
    element: <Header />, // provide the corresponding component
  },
  {
    path: 'products', // tracks the BrowserURL state
    element: <ProductsPage />, // provide the corresponding component
  },
]);

export function Routes() {
  return <RouterProvider router={routerTree} />;
}
