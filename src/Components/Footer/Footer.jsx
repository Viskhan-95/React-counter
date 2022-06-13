import React from 'react';
import styles from './footer.module.css';
import logo_2 from '../../logo_2.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo_2} className={styles.logo} alt="logo" />
            </div>

            <div className={styles.menu}>
                <a href='#'>Партнерам</a>
                <a href='#'>Разработчикам</a>
                <a href='#'>Вакансии</a>
            </div>

            <div className={styles.firma}>
                <p>ООО "Интукод", 2020г.</p>
            </div>
        </div>
    );
};

export default Footer;