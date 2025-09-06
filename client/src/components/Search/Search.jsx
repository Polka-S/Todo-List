import { useState } from 'react';
import styles from './_Search.module.scss';

import searchIcon from '../../images/icons/search.svg';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { useTasks } from '../../contexts/TasksContext';

export default function Search() {

  const { searchTask, setSearchTask, setTaskType } = useTasks();

  function handleSubmit(e) {
    if (e.target.value.length <= 30) setSearchTask(e.target.value);
  }

  return (
    <div className={styles.search}>
      <div className={styles.field}>
        <input
          type="search"
          placeholder='Search task...'
          value={searchTask}
          onChange={(e) => handleSubmit(e)} />
        <img className='icon' src={searchIcon} alt="search" />
      </div>
      <select name="task" id="task-type" onChange={(e) => setTaskType(e.target.value)}>
        <option value="all">all</option>
        <option value="done">done</option>
        <option value="to-do">to do</option>
      </select>
      <ToggleTheme />
    </div>
  );
}