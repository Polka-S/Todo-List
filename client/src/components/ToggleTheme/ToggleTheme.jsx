import styles from './_ToggleTheme.module.scss';
import { useTheme } from '../../contexts/ThemeContext';

import moon from "../../images/icons/moon.svg";
import sun from "../../images/icons/sun.svg";

export default function ToggleTheme() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleTheme}>
      <button className='icon-button' type='button' onClick={toggleTheme}>
        <img src={isDark ? moon : sun} alt="" />
      </button>
    </div>
  );
}