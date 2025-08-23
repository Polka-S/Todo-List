import styles from './_WelcomePage.module.scss';
import Footer from '../../components/Footer/Footer';

export default function WelcomePage() {
  return (
    <div className={styles.welcomePage}>
      <div class="container">
        <div class={styles.card}>
          <h2>Добро пожаловать!</h2>
          <p>Введите ваше имя чтобы начать</p>
          <form>
            <input type="text" placeholder="Ваше имя" required></input>
            <button type="submit">Продолжить</button>
          </form>
        </div>
      </div>
    </div>
  );
}