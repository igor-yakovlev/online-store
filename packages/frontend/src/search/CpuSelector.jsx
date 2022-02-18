import React, {useCallback, useState} from 'react';
import Input from "../components/Input/Input";

const CpuSelector = ({onChange}) => {
    const [cpu, setCpu] = useState('');

    const handleChange = useCallback(({target: {name, value}}) => {
        setCpu(value);
        onChange({key: name, value});
    }, [setCpu, onChange]);

    return (
        <>
            <Input type={'text'} required name={'cpu'} value={cpu} onChange={handleChange} placeholder={'По процессору'}/>
        </>
    )
}

export default CpuSelector;
