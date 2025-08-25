import styles from './_WelcomePage.module.scss';
import { useState } from 'react';

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
        <div className={styles.card}>
          <h2>Добро пожаловать!</h2>
          <p>Введите ваше имя чтобы начать</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button type="submit">Продолжить</button>
          </form>
        </div>
      </div>
    </div>
  );
}