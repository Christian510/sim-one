
import React, { Component } from 'react';


class UpdateProdcut extends Component {
    
    render(){
        let { update_img, update_name, update_price } = this.props;
        console.log("UpdateProduct: " + update_name );
        return (
            <section className="container flex-center-col">
                <section className="form-card" >
                    <form className="flex-center-col">
                        <img id="product-img" src={ update_img } alt="product" width="300" height="200"></img>
                        <div className="flex-left form-input" >
                            <label>Image Url </label>
                            <input
                                type="url"
                                name="img_url"
                                pattern="https://.*"
                                placeholder="http://mybeautifulpainting.com"
                                value= { update_img }
                                onChange={ this }
                                required />
                        </div>

                        <div className="flex-left form-input" >
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Prodcut Name"
                                value={ update_name }
                                onChange={ this } />
                        </div>

                        <div className="flex-left form-input" >
                            <label> Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Priceless!"
                                value={ update_price }
                                onChange={ this } />
                        </div>

                        <section className="form-buttons">
                            <button onClick={ this.cancelAddProduct } >Cancel</button>
                            <button onClick={ this } >Add to Inventory</button>
                        </section>
                        { this.renderRedirect() }
                    </form>
                   
                </section>
            </section>
        )
    }
}
export default UpdateProdcut;