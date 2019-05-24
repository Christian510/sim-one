import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios';

// ***** Styles ***** //
import './App.sass';
import './component/Global/Global.sass';

// ***** Components ***** //
import Header from './component/Header/Header.js';
import Product from './component/Product/Product';
import Form from './component/Form/Form';
import UpdateProduct from './component/Form/UpdateProduct';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.addToDb = this.addToDb.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
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

  updateProduct(img_url, productName, price) {
    axios.put('/edit/prodcuts', {img_url, productName, price})
    .then( res => {
      console.log('===== Sucessfully updated product')
    })
  }
  
  addToDb(img_url, productName, price) {
    console.log("addToDb: " + price);
    axios.post('/add/products', { img_url, productName, price })
      .then(res => {
        console.log('====== Successfully added to db! =====');
        this.getProducts();
      })
      .catch(err => {
        console.log('===== Failure =====');
        console.log(err);
      })
  }

  deleteProduct(id) {
    axios.delete(`/delete/products/${id}`)
      .then(() => {
        console.log('===== Grabbed id =====');
        this.getProducts();
      })
      .catch(err => {
        console.log('===== Failure =====');
        console.log(err);
      })
  }


  render() {
    const { products } = this.state;

    return (
      <section>
        <section className="app" >
              <Header />
              <Switch>
                <Route path="/"
                  render={
                    () => products.map((product, index) => (
                    <Product
                      key={index}
                      id={product.id}
                      img_url={product.img_url}
                      productName={product.productname}
                      price={product.price}
                      addImge={this.addImage}
                      deleteProduct={this.deleteProduct}
                    />
                  ))} exact />

                <Route path="/form"
                  render={() =>
                    <Form
                      addToDbFn={this.addToDb}
                      getProducts={this.getProducts}
                       />} 
                      />
                  <Route path="/update"
                  render={() =>
                    <UpdateProduct
                      updateProductFn={this.updateProduct}
                      getProducts={this.getProducts}
                       />} 
                      />
              </Switch>
        </section>
      </section>
    );
  }
}

export default App;
