import styles from './_WelcomePage.module.scss';
import { useState } from 'react';

import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';

export default function WelcomePage({ setUserName }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() && name.length < 30) {
      localStorage.setItem('userName', name)
      setUserName(name)
    }
  }

  return (
    <div className={styles.welcomePage}>
      <div className="container">
        <div className="component">
          <h2>Добро пожаловать!</h2>
          <p>Введите ваше имя чтобы начать</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.buttons}>
              <button className='button' type="submit">Продолжить</button>
              <ToggleTheme />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}