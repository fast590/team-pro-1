import React, {Component} from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ProductDelete from './productdelete';

class ProductView extends Component{
    
    handleClick = (e) => {
        const id = `productid-${this.props.product.id}`;
        
        const element =  document.getElementById(`${id}`)
        
        if(element.classList.contains("hidden")){
            element.classList.remove("hidden");
        }else{
            element.classList.add("hidden")
        }
    }

    render(){
            const {product} = this.props;
            const divid = `productdivid-${this.props.product.id}`;
        return(
            <tr className = "border-t border-gray-300" id = {divid}>
                <td className = "h-40">
                    <img src = {product.images[0].src} className ="h-full m-auto py-2" alt = "Product"></img>
                </td>
                <td>
                    <h5 className ="text-center">{product.name}</h5>
                </td>
                <td>
                    <p className = "text-center">{product.price}</p>
                </td>
                <td>
                    <p className = "text-center">{product.sku}</p>
                </td>
                <td className = "text-center">
                    <div className = "inline-flex">
                        <div className = "w-6 h-6 text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className = "w-6 h-6 mx-6 text-blue-700">
                            <Link to = {{
                                pathname: `/product/edit/${product.id}`,
                                productProps: {
                                    product:product
                                }
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </Link>
                        </div>
                        <div className = "w-6 h-6 text-red-700 relative">
                            {/* <Link to = {{
                                pathname: `/product/delete/${product.id}`,
                                productProps: {
                                    product:product
                                }
                            }}> */}
                            <button className = "w-6 h-6" onClick = {this.handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            {/* </Link> */}
                            <ProductDelete product = {product}/>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}

export default withRouter(ProductView)
