import { useState } from 'react';
import styles from './_AddTaskWindow.module.scss';
import { useTasks } from '../../../contexts/TasksContext';


const AddTaskWindow = () => {
  const [task, setTask] = useState({});
  const { addTask } = useTasks();

  function handleChange({ target }) {
    const { name, value } = target;
    if (name === 'task' && value.length <= 30 ||
        name === 'description' && value.length < 400) {
      setTask((prevTask) => ({
        ...prevTask,
        [name]: value
      }));
    }
  };

  function handleClick() {
    if (task.task.trim()) {
      addTask(task.task, task.description);
      setTask({});
    }
  }

  return (
    <div className={styles.addTaskWindow}>
      <form className='component'>
        <input
          type="text"
          className='input'
          name='task'
          placeholder='Your task...'
          value={task.task || ''}
          onChange={handleChange}
        />
        <textarea
          className='input'
          name="description"
          id="description"
          placeholder='Task description...'
          value={task.description || ''}
          onChange={handleChange}
        ></textarea>
        <button type='button' className='button' onClick={handleClick}>Save</button>
      </form>
    </div>
  );
};

export default AddTaskWindow