import React from 'react';
import logo from '../../logo.svg';
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.header} >
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>

                <div >
                    <a href='#'>Главная</a>
                    <a href='#'>О нас</a>
                    <a href='#'>Контакты</a>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;