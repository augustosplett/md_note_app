import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ items }) => {
    return (
        <div className={styles.sidebar}>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;