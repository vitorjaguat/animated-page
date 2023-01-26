import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';
import { Context } from '../context/Context';

export default function Root() {
  const ctx = useContext(Context);

  return (
    <>
      <Header />
      <AnimatePresence
        mode='wait'
        // onExitComplete={() => }
      >
        <Outlet />
      </AnimatePresence>
    </>
  );
}
