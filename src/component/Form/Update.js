import React, { Component } from 'react';
import './Form.sass';
import '../Global/Global.sass';

class Form extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //       img_url: 'https://via.placeholder.com/300x200.png',
    //       productName: '',
    //       price: null,
    //     }
    // }
    render() {
        let { img_url, productName, price, id } = this.props;
    return (
        <section className="container flex-center-col">
            <section className="form-card" >
                <form className="flex-center-col">
                    <img id="product-img" src={ img_url } alt="product" ></img>
                    <div className="flex-left form-input" >
                        <label>Image Url </label>
                        <input 
                            type="url" 
                            name="Image Url" 
                            value={}
                            onChange={} />
                    </div>

                    <div className="flex-left form-input" >
                        <label>Product Name</label>
                        <input type="text" name="product name" />
                    </div>

                    <div className="flex-left form-input" >
                        <label> Price</label>
                        <input type="text" name="price" />
                    </div>

                    <section className="form-buttons">
                        <button onClick={ this.cancelAddProduct } >Cancel</button>
                        <button onClick={ this.addProduct }  >Add to Inventory</button>
                    </section>
                </form>
            </section>
        </section>
        )
    }
}
export default Form;