import { AnimatePresence, motion } from 'framer-motion';

const Receipt = ({ inView }) => (
  <AnimatePresence>
    {inView && (
      <motion.div
        initial={{ opacity: 0, y: 1000, scale: 0.1 }}
        className="receipt"
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{ duration: 2, ease: 'backInOut' }}
        exit={{ opacity: 0, scale: 0.1 }}
      />
    )}
  </AnimatePresence>
);

export default Receipt;
