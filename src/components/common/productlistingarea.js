import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import ProductView from '../view/product/productview';

function ProductListingeArea(params) {

    const [Product, setProduct] = useState([])

    useEffect(() => {
        axios
            .post("http://localhost:4000/api/products/list", {withCredentials: true, credentials: 'include'})
            .then(res =>{
                console.log(res.data.data)
                setProduct(res.data.data)
            })
    }, []);

    const product =  Product.map(product => <ProductView product = {product} />) 
    return (
        <div className = "w-10/12 float-right h-full">
            <h1> ProductListingeArea</h1>
            <div>
                {product}
            </div>    
            
        </div>
    )
}   
export default withRouter(ProductListingeArea)