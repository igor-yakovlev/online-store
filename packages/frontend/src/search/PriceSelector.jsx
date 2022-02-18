import React, {useCallback, useEffect, useState} from 'react';
import Input from "../components/Input/Input";

const initialPrice = {
    from: '',
    to: ''
}

const PriceSelector = ({onChange}) => {
    const [price, setPrice] = useState(initialPrice);

    useEffect(() => {
        onChange({key: 'price', value: price});
    }, [onChange, price])

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setPrice(state => ({...state, [name]: value}));
    }, [setPrice])

    return (
        <>
            <Input type={'number'} name={'from'} required value={price.from} onChange={handleChange} placeholder={'От'}/>
            <Input type={'number'} name={'to'} required value={price.to} onChange={handleChange} placeholder={'До'}/>
        </>
    )
}

export default PriceSelector;
