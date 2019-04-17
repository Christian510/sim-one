
import React, { Component } from 'react';
import './Product.sass';
import '../Global/Global.sass';

class Product extends Component {

    
    render(){
        const {id, img_url, productName, price, deleteProduct, editProduct } = this.props;
    return (
        <section id="product-wrapper" className="flex-center-col">
            <section className="product-card flex-center-sb-row">
                <div className="card-img">
                    <img src={ img_url } alt="product"  width="300" height="200" ></img>
                </div>
                <div className="product-wrapper">
                    <div className="product-info flex-left">
                        <h1>Title: { productName } </h1>
                        <p>Price: { price } </p>
                    </div>

                    <div className="product-buttons flex-center-sb-row">
                        <button className="green-btn" onClick={ () => { deleteProduct( id ) } } >Delete</button>
                        <button className="green-btn" onClick={ editProduct } >Edit</button>
                    </div>
                </div>

            </section>
        </section>
    );
    }
}

export default Product;