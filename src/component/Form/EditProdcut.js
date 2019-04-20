
import React, { Component } from 'react';

class EditProdcut extends Component {
    
    render(){
        let { img_url, editProduct, cancelAddProduct, renderRedirect } = this.props;
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
                                onChange={ editProduct }
                                required />
                        </div>

                        <div className="flex-left form-input" >
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Prodcut Name"
                                onChange={editProduct} />
                        </div>

                        <div className="flex-left form-input" >
                            <label> Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Priceless!"
                                onChange={editProduct} />
                        </div>

                        <section className="form-buttons">
                            <button onClick={cancelAddProduct} >Cancel</button>
                            <button onClick={editProduct}  >Add to Inventory</button>
                            { renderRedirect }
                        </section>
                    </form>
        )
    }
}
export default EditProdcut;