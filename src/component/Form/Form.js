
import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import './Form.sass';
import '../Global/Global.sass';
import AddProdcut from './AddProduct';
import EditProdcut from './EditProdcut';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img_url: 'https://via.placeholder.com/300x200.png',
            productName: '',
            price: null,
            redirect: false
        };
        this.addProduct = this.addProduct.bind(this);
        this.newProduct = this.newProduct.bind(this);

    }
    newProduct(event) {
        let { getProducts } = this.props;
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        }, () => {
            console.log(event);
            getProducts();
        });

    }

    addProduct() {
        let { addToDbFn } = this.props;
        let { img_url, productName, price } = this.state;
        // console.log( img_url, productName, price )
        if (img_url && productName && price === null) {
            alert("");
        } else {
            this.setState({
                redirect: true
            });
            addToDbFn(img_url, productName, price);
        }
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    }

    editProduct(val1, val2, val3) {
        this.setState({
            img_url: val1,
            productName: val2,
            price: val3
        })
    }

    cancelAddProduct() {
        this.setState({
            img_url: 'https://via.placeholder.com/300x200.png',
            productName: '',
            price: null
        });
    }
    // 1. Write a method that sets state to a product that needs to be updated.
    // check this out: https://stackoverflow.com/questions/35435611/call-2-functions-within-onchange-event
    // 2. This method should act as a switch between two methods?  If the Edit button is clicked then that should trigger a function to set state.
    render() {
        let { img_url } = this.state;
        return (
            <section className="container flex-center-col">
                <section className="form-card" >
                    <Switch>
                        <Route path="/AddProdcut" render={
                            <AddProdcut
                                img_url={img_url}
                                newProduct={this.newProduct}
                                addProduct={this.addProduct}
                                cancelAddProduct={this.cancelAddProduct}
                                renderRedirect={this.renderRedirect}
                            />
                        } />
                        <Route path="/EditProdcut" render={
                            <EditProdcut
                                img_url={img_url}
                                updateProduct={this.updateProduct}
                                cancelAddProduct={this.cancelAddProduct}
                                renderRedirect={this.renderRedirect}
                            />
                        } />
                    </Switch>

                </section>
            </section>
        )
    }
}
export default Form;