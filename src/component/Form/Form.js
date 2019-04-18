
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Form.sass';
import '../Global/Global.sass';

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
        if(img_url && productName && price === null){
           alert("");
        } else {

            this.setState({
                redirect: true
            });

            addToDbFn(img_url, productName, price);

        }
    }

    renderRedirect(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }
    }

    editProduct(val1, val2, val3){
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
    // 2. This method should act as a which between two methods?  If the Edit button is clicked then that should trigger a function to set state.




    render() {
        let { img_url } = this.state;
        return (
            <section className="container flex-center-col">
                <section className="form-card" >
                    <form className="flex-center-col">
                        <img id="product-img" src={img_url} alt="product" width="300" height="200"></img>
                        <div className="flex-left form-input" >
                            <label>Image Url </label>
                            <input
                                type="url"
                                name="img_url"
                                pattern="https://.*"
                                placeholder="http://mybeautifulpainting.com"
                                onChange={this.newProduct}
                                required />
                        </div>

                        <div className="flex-left form-input" >
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Prodcut Name"
                                onChange={this.newProduct} />
                        </div>

                        <div className="flex-left form-input" >
                            <label> Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Priceless!"
                                onChange={this.newProduct} />
                        </div>

                        <section className="form-buttons">
                            <button onClick={this.cancelAddProduct} >Cancel</button>
                            <button onClick={this.addProduct}  >Add to Inventory</button>
                            { this.renderRedirect() }
                        </section>
                    </form>
                </section>
            </section>
        )
    }
}
export default Form;