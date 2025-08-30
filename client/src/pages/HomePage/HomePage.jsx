import styles from './_HomePage.module.scss';

import Search from '../../components/Search/Search';
import AddTask from '../../components/AddTask/AddTask';
import { useState } from 'react';

export default function HomePage() {
  const [todos, setTodos] = useState(localStorage.getItem('todos') || []);

  return (
    <div className={styles.homePage}>
      <div className="container">
        <div className="component">
          <div className={styles.head}>
            <Search />
          </div>
          <div className={styles.main}>

          </div>
        </div>
      </div>
      <AddTask />
    </div>
  );
}