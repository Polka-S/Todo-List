import { useState } from 'react';
import styles from './_Search.module.scss';

import searchIcon from '../../images/icons/search.svg';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

export default function Search() {
  const [search, setSearch] = useState('');

  function handleChange(target) {
    const value = target.value;

    setSearch(value);
  }

  return (
    <div className={styles.search}>
      <div className={styles.field}>
        <input type="search" placeholder='Search note...' value={search} onChange={handleChange} />
        <img className='icon' src={searchIcon} alt="search" />
      </div>
      <select name="note" id="note-type">
        <option value="all">all</option>
        <option value="done">done</option>
        <option value="not-done">not done</option>
      </select>
      <ToggleTheme />
    </div>
  );
}