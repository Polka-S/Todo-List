import styles from './_HomePage.module.scss';

import Search from '../../components/Search/Search';
import Note from '../../components/Note/Note';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className="container">
        <div className='component'>
          <div className={styles.head}>
            <Search />
          </div>
          <div className={styles.main}>
              <Note />
          </div>
        </div>
      </div>
    </div>
  );
}