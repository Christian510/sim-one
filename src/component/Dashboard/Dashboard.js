
import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  
  render() {
    console.log(this.props);
    const { products } = this.props;
    return (
      <section className="dash-wrapper">
        <section className="dash-container"> 
        {/* { products.map( product => (
            <Product
              key={ product.id }
              img_url={ product.img_url }
              productName={ product.productName }
              price = { product.price }
              addImge ={ this.addImage }
              deleteProduct={this.deleteProduct}
            />
           )) 
           } */}
        </section>
      </section>
    )
  }
}

export default Dashboard;