import styles from './_Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} React Todo App</p>
        <ul className={styles.links}>
          <li className='linkItem'>
            <a href="https://github.com/Polka-S/Todo-List" target='_blank'>
              Исходный код
            </a>
          </li>
          |
          <li className='linkItem'>
            <a href="https://github.com/Polka-S" target='_blank' rel="noopener noferer">
              Мой GitHub
            </a>
          </li>
        </ul>
        <p>Учебный проект по React</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer