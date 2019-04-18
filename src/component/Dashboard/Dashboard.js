
import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  
  render() {
    console.log(this.props);
    const { products } = this.props;
    const displayProducts = products.map( (product, index) => (
      <Product
        key={index}
        id={product.id}
        img_url={product.img_url}
        productName={product.productname}
        price={product.price}
        addImge={this.addImage}
        deleteProduct={this.deleteProduct}
        editProduct={this.editProduct}
      />
    ));
    return (
      <section className="dash-wrapper">
        <section className="dash-container"> 
          { displayProducts }
        </section>
      </section>
    )
  }
}

export default Dashboard;