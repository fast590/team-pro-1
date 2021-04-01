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
        <div className = "w-10/12 m-auto h-full">
            <h1> Product List</h1>
            <div className ="w-full">
                <table className = "w-full shadow">
                    <tr className = "bg-blue-500 h-16">
                        <th className = "w-1/5 	text-center">
                            Product Image
                        </th>
                        <th className = "w-1/5 	text-center">
                            Name
                        </th>
                        <th className = "w-1/5 	text-center">
                            Price
                        </th>
                        <th className = "w-1/5 	text-center">
                            SKU
                        </th>
                        <th className = "w-1/5 	text-center">
                            Edit
                        </th>
                    </tr>
                    {product}
                </table>
            </div>    
            
        </div>
    )
}   
export default withRouter(ProductListingeArea)