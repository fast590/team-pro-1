import axios from 'axios';
import React,{useState} from 'react';
import { withRouter } from 'react-router';

function ProductDetailArea(props) {
    
    const {product} = props.product;

    const [editSate, seteditSate] = useState(true)
    const [productName, setproductName] = useState(product.name)
    const [productPrice, setproductPrice] = useState(product.price)
    const [productSku, setproductSku] = useState(product.sku)

    const proNameHanlder = (e) => {
        setproductName(e.target.value)
    }

    const proPriceHanlder = (e) => {
        setproductPrice(e.target.value)
    }

    const proSkuHanlder = (e) => {
        setproductSku(e.target.value)
    }

    const editProduct = (e) => {
        var t = e.target.textContent;
        
        if(t === 'Edit') {
            e.target.innerHTML = "Update";
            seteditSate(false)
        }else {
            e.target.innerHTML = "Edit";
            seteditSate(true)
            
            const data = {
                'name':productName,
                'price':productPrice,
                'sku':productSku,
                'id':product.id
            }

            axios
                .post("http://localhost:4000/api/products/update", data, {withCredentials: true, credentials: 'include'})
                .then(res => {
                    props.history.push('/product')
                })
        }
    }
    
    const editCancel = (e) => {
        document.getElementById('edit_btn').innerHTML = "Edit";
        seteditSate(true)
    }

    return (
        <div className = "w-4/5 m-auto">
            <h3 className = "mb-20 text-center text-blue-400"> EDIT PRODCUT</h3>
            <div className = "w-full shadow-md pb-10">
                <h6 className = "text-center text-white bg-blue-400 py-3"> Product Information</h6>
                <div className = "w-full flex">
                    <div className = "w-2/4 pr-16">
                        <img src = {product.images[0].src} className = "w-4/5 m-auto" alt = "Product" />
                    </div>
                    <div className ="w-2/4">
                        <div className = "py-1">
                            <label>Product Name</label><br/>
                            <input 
                                type="text" 
                                value = {productName} 
                                disabled = {editSate} 
                                className ="text-2xl border p-1" 
                                onChange = {proNameHanlder}
                            /><br/>
                        </div>
                        <div className = "py-1 mt-3">
                            <label>Product Price</label><br/>
                            <input 
                                type="text" 
                                value = {productPrice} 
                                disabled = {editSate} 
                                className ="text-2xl border p-1" 
                                onChange = {proPriceHanlder}
                            /><br/>
                        </div>
                        <div className = "py-1 mt-3">
                            <label>Product SKU</label><br/>
                            <input 
                                type="text" 
                                value = {productSku} 
                                disabled = {editSate} 
                                className ="text-2xl border p-1" 
                                onChange = {proSkuHanlder} 
                            /><br/>
                        </div>
                    </div>
                </div>
                <div className = "my-10 text-center">
                    <button className = "bg-blue-400 py-2 px-10 mx-1 rounded shadow-md text-white" id = "edit_btn" onClick = {editProduct}>Edit</button>
                    <button className = "bg-blue-400 py-2 px-10 mx-1 rounded shadow-md text-white" onClick = {editCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ProductDetailArea)