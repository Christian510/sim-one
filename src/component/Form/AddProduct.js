
import React, { Component } from 'react';

class AddProdcut extends Component{
    
    render(){
        let { img_url, newProduct, addProduct, cancelAddProduct, renderRedirect } = this.props;
        return (
            
            <form className="flex-center-col">
                        <img id="product-img" src={img_url} alt="product" width="300" height="200"></img>
                        <div className="flex-left form-input" >
                            <label>Image Url </label>
                            <input
                                type="url"
                                name="img_url"
                                pattern="https://.*"
                                placeholder="http://mybeautifulpainting.com"
                                onChange={ newProduct }
                                required />
                        </div>

                        <div className="flex-left form-input" >
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Prodcut Name"
                                onChange={newProduct} />
                        </div>

                        <div className="flex-left form-input" >
                            <label> Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Priceless!"
                                onChange={newProduct} />
                        </div>

                        <section className="form-buttons">
                            <button onClick={cancelAddProduct} >Cancel</button>
                            <button onClick={addProduct}  >Add to Inventory</button>
                            { renderRedirect }
                        </section>
                    </form>
        )
    }
}
export default AddProdcut;
