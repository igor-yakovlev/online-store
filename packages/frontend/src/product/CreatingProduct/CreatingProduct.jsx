import React, {useCallback, useState} from 'react';
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input';
import styles from './CreatingProduct.module.css';

const initialProduct = {
    name: '',
    description: '',
    price: 0,
    cpu: ''
}
const CreatingProduct = ({onSubmit}) => {
    const [product, setProduct] = useState(initialProduct);

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setProduct((state) => ({...state, [name]: value}))
    }, [setProduct]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        onSubmit(product);
    }, [product, onSubmit])

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                required
                onChange={handleChange}
                type="text"
                name={"name"}
                placeholder="Название"
            />
            <Input
                required
                onChange={handleChange}
                type="text"
                name={"description"}
                placeholder="Описание"
            />
            <Input
                required
                onChange={handleChange}
                type="number"
                name={"price"}
                placeholder="Цена"
            />
            <h1 className={styles.title}>Характеристики</h1>
            <Input
                required
                onChange={handleChange}
                name={"cpu"}
                type="text"
                placeholder="Тип процессора"
            />

            <Button type={'sumbit'}>Добавить</Button>
        </form>
    );
};

export default CreatingProduct;
