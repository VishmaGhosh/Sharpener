import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Products from './components/product/Products';
import Footer from './components/layout/Footer';
import Cart from './components/cart/Cart';
import About from './components/layout/About'
import CartContextProvider from './store/CartContextProvider';
import ProductSummary from './components/product/ProductSummary';
import Home from './components/home/Home';
import Contactus from './components/layout/Contactus';
import { Switch } from 'react-router-dom';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/auth/Login';

function App() {
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () => {
    setShowCart(!showCart);
  }
  return (
    <CartContextProvider>
      <Header showCart={showCartHandler} />
      <main>
        {/* <Switch> */}
          <ProductSummary />
          <Route path="/about" exact>
            <About />
          </Route>
          {showCart && <Cart showCart={showCartHandler} />}
          <Route path="/" exact>
            <Products />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/contactus" exact>
            <Contactus />
          </Route>
          <Route path="/product/:productId/" exact>
            <ProductDetails />
        </Route>
        <Route path="/auth" exact>
          <Login />
        </Route>
        {/* </Switch> */}
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
