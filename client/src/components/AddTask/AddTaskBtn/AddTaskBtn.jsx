import styles from './_AddTaskBtn.module.scss';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AddTaskBtn = ({ isOpen, setIsOpen }) => {
  return (
    <div className={styles.addTaskBtn}>
      <button
        className={styles.plusBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
      <AnimatePresence initial={false} mode="wait">
        {isOpen ? (
          <motion.div
            key="minus"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Minus size={24} color='white' />
          </motion.div>) : (
          <motion.div
            key="plus"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Plus size={24} color='white' />
          </motion.div>
        )}
      </AnimatePresence>
      </button>
    </div>
  );
};

export default AddTaskBtn