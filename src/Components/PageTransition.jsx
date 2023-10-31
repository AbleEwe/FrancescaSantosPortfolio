import { motion } from 'framer-motion'

const PageTransition = ({ children }) => { //eslint-disable-line
  return (
    <motion.div
      className='slide-in'
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0)', opacity: 1 }}
      exit={{ filter: 'blur(10px)', opacity: 0 }}
      transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
