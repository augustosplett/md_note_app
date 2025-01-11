
import React from 'react';
import styles from './TextPage.module.css';

const TextPage = () => {
    return (
        <div className={styles.container}>
            <textarea className={styles.textarea} placeholder="Enter your text here..."></textarea>
        </div>
    );
};

export default TextPage;