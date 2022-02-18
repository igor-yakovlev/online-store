import React, {useCallback, useState} from 'react';
import SearchProduct from "../search/SearchProduct/SearchProduct";
import CardProduct from "../search/CardProduct/CardProduct";
import {useFetchProducts} from "../search/useFetchProducts";

const SearchScreen = () => {
    const [searchParams, setSearchParams] = useState(null);
    const {data, isLoading} = useFetchProducts(searchParams);

    const handleSubmit = useCallback(async (search) => {
        const {name, param: {key, value}} = search;
        let params = {};

        const mapParam = (key, value) => {
            const paramValue = key === 'price' ? `${value.from}|${value.to}` : value;

            return {[key]: paramValue}
        }

        if (name)
            params.name = name;

        if (key && value)
            params = {...params, ...mapParam(key, value)}

        setSearchParams(params)
    }, [setSearchParams]);

    if (isLoading)
        return <>Is loading...</>

    if (!data)
        return <>Not found</>

    return (
        <>
            <SearchProduct onSubmit={handleSubmit}/>
            {data.map(it => <CardProduct key={it._id} value={it}/>)}
        </>
    )
}

export default SearchScreen;
