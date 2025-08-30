import { useState } from 'react';
import styles from './_Task.module.scss';
import { motion, AnimatePresence } from "motion/react";

import trash from '../../images/icons/trash.svg';
import pencil from '../../images/icons/pencil.svg';
import arrowDown from '../../images/icons/arrow-down.svg'

export default function Task() {
  const [isChecked, setIsChecked] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [isShowIcons, setIsShowIcons] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div
      className={styles.task}
      onMouseEnter={() => setIsShowIcons(true)}
      onMouseLeave={() => setIsShowIcons(false)}
    >
      <input className={styles.checkbox} type="checkbox"  onChange={handleChange} value={isChecked}/>
      <div className={`${styles.taskText} ${isShowDescription ? styles.open : ""}`}>
        <div className={styles.taskTitle}>
          <p>Task</p>
          <motion.div
            className={styles.strike}
            initial={false}
            animate={{ scaleX: isChecked ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>

        <AnimatePresence initial={false}>
          {isShowDescription && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p>Task description</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {isShowIcons && (
          <motion.div
            className={styles.icons}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              className='mini-icon-button'
              onMouseEnter={() => setIsShowDescription(true)}
              onMouseLeave={() => setIsShowDescription(false)}
            >
              <img src={arrowDown} alt="arrow down"/>
            </button>
            <button className='mini-icon-button'>
              <img src={trash} alt="trash" />
            </button>
            <button className='mini-icon-button'>
              <img src={pencil} alt="pencil" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}