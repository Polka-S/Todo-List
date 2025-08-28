import { useState } from 'react';
import styles from './_Note.module.scss';
import { motion, AnimatePresence } from "motion/react";

import trash from '../../images/icons/trash.svg';
import pencil from '../../images/icons/pencil.svg';
import arrowDown from '../../images/icons/arrow-down.svg'

export default function Note() {
  const [isChecked, setIsChecked] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
    console.log(isChecked);
  }

  return (
    <div className={styles.note}>
      <input className={styles.checkbox} type="checkbox"  onChange={handleChange} value={isChecked}/>
      <div className={`${styles.noteText} ${isShowDescription ? styles.open : ""}`}>
        <div className={styles.noteTitle}>
          <p>Note</p>
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
              <p>Note description</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.icons}>
        <button className='mini-icon-button'>
          <img 
            src={arrowDown}
            alt="arrow down" 
            onMouseEnter={() => setIsShowDescription(true)}
            onMouseLeave={() => setIsShowDescription(false)}
          />
        </button>
        <button className='mini-icon-button'>
          <img src={trash} alt="trash" />
        </button>
        <button className='mini-icon-button'>
          <img src={pencil} alt="pencil" />
        </button>
      </div>
    </div>
  );
}