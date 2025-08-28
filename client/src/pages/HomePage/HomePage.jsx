import styles from './_HomePage.module.scss';

import Search from '../../components/Search/Search';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className="container">
        <div className={styles.head}>
          <Search />
        </div>
      </div>
    </div>
  );
}