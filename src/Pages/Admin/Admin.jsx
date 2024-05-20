// import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Admin.css';
import AddProduct from '../../Components/AddProduct/AddProduct';
import { Route, Routes } from "react-router-dom";
import ListProduct from "../../Components/ListProduct/ListProduct";

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar/>
            <Routes>
                <Route path="/" element={<AddProduct />} />
                <Route path="/listproduct" element={<ListProduct />} />
            </Routes>
        </div>
    )
}

export default Admin
