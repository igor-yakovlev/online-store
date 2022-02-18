import React, {useCallback} from 'react';
import CreatingProduct from "../product/CreatingProduct/CreatingProduct";
import {useSaveProduct} from "../product/useSaveProduct";
import {useNavigate} from "react-router-dom";

const CreateProductScreen = () => {
    const navigate = useNavigate();
    const {save} = useSaveProduct();

    const handleSubmit = useCallback(async ({name, description, price, cpu}) => {
        await save({name, description, params: {price, cpu}});
        navigate('/');
    }, [save, navigate]);

    return (
        <>
            <CreatingProduct onSubmit={handleSubmit}/>
        </>
    )
}

export default CreateProductScreen;
