import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ items }) => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li className={styles.listItem} key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;