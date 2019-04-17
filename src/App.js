import React, { Component } from 'react';
import axios from 'axios';
import './App.sass';
import './component/Global/Global.sass';
import Header from './component/Header/Header.js';
import Product from './component/Product/Product';
import Form from './component/Form/Form';
// import route from './route';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.addToDb = this.addToDb.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    // this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts(){
    console.log('===== Did Mount! =====');
    axios.get('/get/products')
      .then(res => {
        console.log('====== Success! =====');
        this.setState({
          products: res.data,
        });
      })
      .catch(err => {
        console.log('===== Failure =====');
        console.log(err);
      })
  }
  // 1. editProduct will update existing products
  // 2. Take a product back to the form for updating
  // editProduct() {
  //   axios.put()
  //   this.setState({


  //   })
  // }

  addToDb(img_url, productName, price) {
      axios.post( '/add/products', {img_url, productName, price} )
      .then(res => {
        console.log('====== Successfully added to db! =====');
        this.getProducts();
      })
      .catch(err => {
        console.log('===== Failure =====');
        console.log(err);
      })
  }

  deleteProduct( id ){
    axios.delete( `/delete/products/${id}` )
    .then( () => {
      console.log('===== Grabbed id =====');
      this.getProducts();
    })
    .catch( err => {
      console.log( '===== Failure =====');
      console.log( err );
    }
    )
  }


  render() {
    const { products } = this.state;
    
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
      <section>
        <Header />
        <section className="app" >
          <div className="float-left">
            { displayProducts }
          </div>
          <div className="float-right">
            <Form 
              addToDbFn = { this.addToDb }
              getProducts = { this.getProducts} />
          </div>
        </section>
      </section>
    );
  }
}

export default App;
