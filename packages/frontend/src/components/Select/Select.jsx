import React, {useCallback} from 'react';
import styles from './Select.module.css'

const Select = ({options, value, onChange}) => {
    const handleChange = useCallback(({target}) => {
        onChange(target.value);
    }, [onChange]);

    return (
        <select
            className={styles.mySel}
            value={value}
            onChange={handleChange}
        >
            <option hidden defaultValue>Выберите параметр...</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default Select;
