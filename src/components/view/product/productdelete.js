import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';

function ProductDelete(props) {
    
    const product = props.product

    const handleDelete = (e) => {
        const data = {
            id:product.id
        }
        axios 
            .post('http://localhost:4000/api/products/delete', data, {withCredentials: true, credentials: 'include'})
            .then(res=>{
                console.log(res.data)
                const divid = `productdivid-${product.id}`;
                const element = document.getElementById(`${divid}`)
                element.classList.add("hidden")
            })
    }
    const id = `productid-${product.id}`;
    return(
        <div className = "w-40 h-20 bg-gray-400 absolute right-0 hidden" id = {id}>
            <h6 className = "pt-1">Are you sure?</h6>
            
            <button className = "py-1 px-5 bg-blue-500 text-white rounded-3xl" onClick = {handleDelete}>Yes</button>
        </div>
    )
}
export default withRouter(ProductDelete)