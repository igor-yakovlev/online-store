import React from 'react';
import styles from './Navigation.module.css';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
      <div className={styles.container}>
        <ul className={styles.items}>
          <li className={styles.item}><Link to={'/create-product'}>Создать товар</Link></li>
          <li className={styles.item}><Link to={'/'}>Поиск</Link></li>
        </ul>
      </div>
    );
};

export default Navigation;
