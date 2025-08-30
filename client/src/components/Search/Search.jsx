import { useState } from 'react';
import styles from './_Search.module.scss';

import searchIcon from '../../images/icons/search.svg';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

export default function Search() {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.search}>
      <div className={styles.field}>
        <input type="search" placeholder='Search task...' value={search} onChange={e => setSearch(e.target.value)} />
        <img className='icon' src={searchIcon} alt="search" />
      </div>
      <select name="task" id="task-type">
        <option value="all">all</option>
        <option value="done">done</option>
        <option value="to-do">to do</option>
      </select>
      <ToggleTheme />
    </div>
  );
}