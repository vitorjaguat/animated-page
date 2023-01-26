import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import Base from './pages/Base';
import Toppings from './pages/Toppings';
import Order from './pages/Order';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'base',
        element: <Base />,
      },
      {
        path: 'toppings',
        element: <Toppings />,
      },
      {
        path: 'order',
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <>
  //     <Header />
  //     <Modal
  //       showModal={showModal}
  //       setShowModal={setShowModal}
  //       resetPizza={resetPizza}
  //     />
  //     <AnimatePresence
  //       exitBeforeEnter
  //       onExitComplete={() => setShowModal(false)}
  //     >
  //       <Switch location={location} key={location.key}>
  //         <Route path='/base'>
  //           <Base addBase={addBase} pizza={pizza} />
  //         </Route>
  //         <Route path='/toppings'>
  //           <Toppings addTopping={addTopping} pizza={pizza} />
  //         </Route>
  //         <Route path='/order'>
  //           <Order pizza={pizza} setShowModal={setShowModal} />
  //         </Route>
  //         <Route path='/'>
  //           <Home />
  //         </Route>
  //       </Switch>
  //     </AnimatePresence>
  //   </>
  // );
}

export default App;
