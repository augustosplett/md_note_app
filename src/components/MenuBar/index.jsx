import styles from './MenuBar.module.css';
import SystemMenu from './SystemMenu';
import TextStyleMenu from './TextStyleMenu';

const MenuBar = () => {
    return (
        <div className={styles.menuBar}>
            <SystemMenu />
            <TextStyleMenu />
        </div>
    )
    
}

export default MenuBar;