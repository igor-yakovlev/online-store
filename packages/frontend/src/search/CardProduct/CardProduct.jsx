import React from 'react';
import styles from './CardProduct.module.css';

const CardProduct = ({value}) => {
    const {name, description, params: {price, cpu}} = value;

    return (
        <div className={styles.card}>
            <div></div>
            <div className={styles.info}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.description}>{description}</p>

                <div className={styles.characteristics}>
                    <h3 className={styles.subtitle}>Характеристики</h3>
                    <ul className={styles.items}>
                        <li className={styles.item}>Тип процессора {cpu}</li>
                    </ul>
                </div>
                <div className={styles.price}>{price} руб</div>
            </div>
        </div>
    );
};

export default CardProduct;
