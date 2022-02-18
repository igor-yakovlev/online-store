import React, {useCallback, useState} from 'react';
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input';
import styles from './SearchProduct.module.css';
import Select from '../../components/Select/Select';
import CpuSelector from "../CpuSelector";
import PriceSelector from "../PriceSelector";

const initialSearch = {
    name: '',
    param: {
        key: '',
        value: ''
    },
}

const selectOptions = [
    {value: 'cpu', name: "По процессору"},
    {value: 'price', name: "По цене"},
]

const SearchProduct = ({onSubmit}) => {
    const [search, setSearch] = useState(initialSearch);
    const [selectedParam, setSelectedParam] = useState('');

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;

        setSearch(state => ({...state, [name]: value}));
    }, [setSearch]);

    const handleParamChange = useCallback((param) => {
        setSearch(state => ({...state, param}))
    },[setSearch])
    
    const handleSelectChange = useCallback((value) => setSelectedParam(value), [setSelectedParam]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSubmit(search)
    }, [search, onSubmit]);

    return (
        <form className={styles.page} onSubmit={handleSubmit}>
            <Input type="text"
                   placeholder="Введите название товара"
                   name={'name'}
                   value={search.name}
                   onChange={handleChange}/>
            <Select value={selectedParam} options={selectOptions} onChange={handleSelectChange}/>

            {selectedParam === 'price' && <PriceSelector onChange={handleParamChange}/>}
            {selectedParam === 'cpu' &&  <CpuSelector onChange={handleParamChange} />}

            <Button type={'submit'}>Поиск</Button>
        </form>
    );
};


export default SearchProduct;
