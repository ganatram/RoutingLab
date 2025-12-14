    Routing composed 3 main elements :

// import { createBrowserRouter } from 'react-router-dom';

// import { RouterProvider } from 'react-router-dom';

              a) HashBang  - 'event that causes a state change in the BrowserURL'.



                             <Link to={'products'}> click here  <Link>

                             <NavLink to={'sales'}>   go to sales     <NavLink>


              b) RouterTree - Track the BrowserURL state and delivers a certain component

                              -- array of route objects

                               const myRouterTree = createBrowserRouter([
                               {
                                 path:'products',
                                 element:<ProductsComponent/>

                               },{
                                path:'sales',
                                element:<SalesComponent/>

                               }]
                               )



              c) Routing Placeholder - serve the component provided by the router Tree


                   <RouterProvider router={myRouterTree}/>
