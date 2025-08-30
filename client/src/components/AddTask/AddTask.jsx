import { useState } from 'react';
import styles from './_AddTask.module.scss';
import AddTaskWindow from './AddTaskWindow/AddTaskWindow';
import AddTaskBtn from './AddTaskBtn/AddTaskBtn';
import { motion, AnimatePresence } from "motion/react";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.addTask}>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <AddTaskWindow/>
          </motion.div>
        )}
      </AnimatePresence>
      <AddTaskBtn isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AddTask