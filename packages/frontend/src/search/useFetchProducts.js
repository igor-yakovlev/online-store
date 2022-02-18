import {useEffect, useState} from "react";

const API_PRODUCTS = 'api/products'

export function useFetchProducts(params) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () =>{
            const url = new URL(`${window.location.origin}/${API_PRODUCTS}`);

            if (params)
                Object.entries(params).forEach(param => url.searchParams.append(...param))

            const response = await fetch(url.href, {method: 'GET'})
                .then(res => res.json());

            setData(response);
            setLoading(false);
        }

        fetchData();
    }, [params])

    return {data, isLoading: loading};
}
