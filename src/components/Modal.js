import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Context } from '../context/Context';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ setShowModal }) => {
  const { resetCart } = useContext(Context);

  const handleClick = () => {
    resetCart();
    setShowModal(false);
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className='backdrop'
        variants={backdropVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <motion.div className='modal' variants={modalVariants}>
          <p>Want to make another pizza?</p>
          <Link to='/'>
            <button onClick={handleClick}>Start again</button>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
