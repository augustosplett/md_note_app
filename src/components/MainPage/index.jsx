import styles from './MainPage.module.css';

const MainPage = ({ children }) => {
  return (
    <div className={styles.mainPage}>
        { children }
    </div>
  );
};

export default MainPage;