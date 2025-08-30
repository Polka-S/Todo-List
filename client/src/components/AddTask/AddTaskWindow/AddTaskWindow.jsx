import { useState } from 'react';
import styles from './_AddTaskWindow.module.scss';

const AddTaskWindow = () => {
  const [task, setTask] = useState({});

  function handleChange({ target }) {
    const { name, value } = target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  // function handleButton

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
        <button type='button' className='button'>Save</button>
      </form>
    </div>
  );
};

export default AddTaskWindow