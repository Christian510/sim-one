
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './Product.sass';
import '../Global/Global.sass';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            update_img: '',
            update_name: '',
            update_price: '',
            redirect: false
        }
        this.pushUpdate = this.pushUpdate.bind(this);
    }
   

    pushUpdate(img, name, price) {
        console.log('Clicked!!!!!');
        this.setState({
            update_img: img,
            update_name: name,
            update_price: price,
            redirect: true
        }, () => {console.log("pushUpdate: " + img, name, price)});
    }

    renderRedirect() {
        if(this.state.redirect) {
            return <Redirect to="/update" />
        }
    }
    render() {
        const { id, img_url, productName, price, deleteProduct } = this.props;
        return (
            <section id="product-wrapper" className="flex-center-col">
                <section className="product-card flex-center-sb-row">
                    <div className="card-img">
                        <img src={img_url} alt="product" width="300" height="200" ></img>
                    </div>
                    <div className="product-wrapper">
                        <div className="product-info flex-left">
                            <h1>Title: {productName} </h1>
                            <p>Price: {price} </p>
                        </div>

                        <div className="product-buttons flex-center-sb-row">
                            <button className="green-btn" 
                                    onClick={() => 
                                    { deleteProduct(id) }} >Delete</button>
                            <button className="green-btn" 
                                    onClick={() => 
                                    { this.pushUpdate( img_url, productName, price ) }} >Edit</button>
                            {this.renderRedirect()}
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Product;