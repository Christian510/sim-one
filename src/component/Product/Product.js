
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Product.sass';
import '../Global/Global.sass';

class Product extends Component {

    state = {
        redirect: false
    }

    pushProduct(val) {
        console.log(val);
        console.log('Clicked!!!!!');
        // this.setState({
        //     redirect: true
        // });

        // console.log(this.props.editProduct);
        // let { editProduct } = this.props;
        // editProduct(img_url, productName, price);
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/form" />
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
                            <button className="green-btn" onClick={() => { deleteProduct(id) }} >Delete</button>
                            <button className="green-btn" onClick={() => { this.pushProduct(img_url) }} >Edit</button>
                            {this.renderRedirect()}
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Product;