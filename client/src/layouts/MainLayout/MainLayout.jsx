import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import styles from './_MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      {/* <Header /> */}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout