import { useState } from 'react';
import styles from './_Task.module.scss';
import { motion, AnimatePresence } from "motion/react";

import { useTasks } from '../../../contexts/TasksContext';
import { Trash2, Pencil, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function Task(props) {
  const iconsSize = 20;
  const iconsColor = 'white';

  const [localeTask, setLocaleTask] = useState(props.task);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const { toggleTask, removeTask, editTask } = useTasks();

  function handleChange({ target }) {
    const { name, value } = target;

    if (name === 'task' && value.length <= 30 ||
        name === 'description' && value.length <= 400) {
      setLocaleTask((prevTask) => ({
        ...prevTask,
        [name]: value,
      }));
    }
  }

  function handleClick() {
    if (isChanging) {
      setIsChanging(!isChanging);
      editTask(props.task.id, localeTask);
    } else {
      setIsChanging(!isChanging);
    };
  }

  return (
    <div
      className={`${styles.task} ${isChanging ? styles.isChanging : ""}`}
    >
      <input className={styles.checkbox} type="checkbox" onChange={() => toggleTask(props.task.id)} checked={props.task.completed}/>
      { isChanging ? (
        <div className={`${styles.taskText} ${styles.open}`}>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleClick()
          }}>
            <div className={styles.taskTitle}>
              <input
                type="text"
                name='task'
                className='input'
                value={localeTask.task}
                onChange={handleChange}
              />
            </div>

            <AnimatePresence initial={false}>
              <div className=''>
                <textarea
                  type="text"
                  className='input'
                  name="description"
                  id="description"
                  placeholder='Task description...'
                  value={localeTask.description || ''}
                  onChange={handleChange}
                >
                  {localeTask.description}
                </textarea>
              </div>
            </AnimatePresence>
          </form>
        </div>
      ) : (
        <div className={`${styles.taskText} ${isShowDescription ? styles.open : ""}`}>
          <div className={styles.taskTitle}>
            <span className={styles.textWrapper}>
              <p>{props.task.task}</p>
              <motion.div
                className={styles.strike}
                initial={false}
                animate={{ scaleX: props.task.completed ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </span>
          </div>

          <AnimatePresence initial={false}>
            {isShowDescription && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={styles.taskDescription}
              >
                <p>{props.task.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      <div className={styles.icons}>
        { !props.task.description && 
          <div
            className={styles.buttonStub}
            style={{ width: iconsSize }}
          />
        }
        { props.task.description && !isChanging &&
          <button
            className='mini-icon-button'
            onClick={() => setIsShowDescription(!isShowDescription)}
          >
            { isShowDescription ? (
              <ChevronUp size={iconsSize} color={iconsColor} />
            ) : (
              <ChevronDown size={iconsSize} color={iconsColor} />
            )}
          </button>
        }
        { !isChanging && (
          <button
            className='mini-icon-button'
            onClick={() => removeTask(props.task.id)}
          >
            <Trash2 size={iconsSize} color={iconsColor}/>
          </button>
        )}
        <button
          className='mini-icon-button'
          onClick={handleClick}
        >
          {isChanging ? (
            <Check size={iconsSize} color={iconsColor} />
          ) : (
            <Pencil size={iconsSize} color={iconsColor} />
          )}
        </button>
      </div>
    </div>
  );
}