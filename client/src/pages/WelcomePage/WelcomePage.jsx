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
        <div className="card">
          <h2>Hello!</h2>
          <p>Enter your name:</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.fields}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                className='input'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <button className='button' type="submit">continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}