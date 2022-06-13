import React from 'react';
import styles from './content.module.css'

const Content = () => {
    return (
        <div className={styles.content}>
            <div id={styles.count}>
                <h1>0</h1>
            </div>

            <div className={styles.buttons}>
                <button id={styles.increment}>Увеличить</button>
                <button id={styles.decrement}>Уменьшить</button>
                <button id={styles.reset}>Сбросить</button>
            </div>
            
        </div>
    );
};

export default Content;