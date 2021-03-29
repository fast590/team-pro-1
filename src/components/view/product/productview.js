import React, {Component} from 'react'
import { withRouter } from 'react-router';

class ProductView extends Component{

    render(){
            const {product} = this.props;
        return(
            <div className = "w-3/5 h-40 flex mx-auto py-8">
                    <img src = {product.images[0].src} className =""></img>
                    <h3 className ="text-center">{product.name}</h3>
                    <p className = "text-center">{product.price}</p>
            </div>
        )
    }
}

export default withRouter(ProductView)
