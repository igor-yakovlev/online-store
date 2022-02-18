import React from 'react';
import SearchScreen from "./screens/SearchScreen";
import CreateProductScreen from "./screens/CreateProductScreen";
import {Route, Routes} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/create-product'} element={<CreateProductScreen/>}/>
            <Route path={'/'} element={<SearchScreen/>}/>
        </Routes>
    )
}
export default AppRoutes;
