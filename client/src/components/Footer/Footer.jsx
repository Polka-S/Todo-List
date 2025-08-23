import styles from './_Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} React Todo App</p>
        <div className="footer-links">
          <a href="https://github.com/Polka-S/Todo-List" target='_blank'>
            Исходный код
          </a>
          <a href="https://github.com/Polka-S" target='_blank' rel="noopener noferer">
            Мой GitHub
          </a>
        </div>
        <p>Учебный проект по React</p>
      </div>
    </footer>
  );
};

export default Footer