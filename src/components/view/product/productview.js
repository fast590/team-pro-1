import React, {Component} from 'react'
import { withRouter } from 'react-router';

class ProductView extends Component{

    render(){
            const {product} = this.props;
        return(
            <div className = "w-1/4 float-left m-8">
                <img src = {product.images[0].src} className ="w-3/4 m-auto"></img>
                <h3 className ="text-center">{product.name}</h3>
                <p className = "text-center">{product.price}</p>
            </div>
        )
    }
}

export default withRouter(ProductView)
