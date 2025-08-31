import styles from './_HomePage.module.scss';

import Search from '../../components/Search/Search';
import AddTask from '../../components/AddTask/AddTask';
import TasksList from '../../components/TasksList/TasksList';

export default function HomePage() {

  return (
    <div className={styles.homePage}>
      <div className="container">
        <div className="component">
          <div className={styles.head}>
            <Search />
          </div>
          <div className={styles.main}>
            <TasksList />
          </div>
        </div>
      </div>
      <AddTask />
    </div>
  );
}