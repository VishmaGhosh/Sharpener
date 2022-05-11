import { useState } from 'react';
import './App.css';
import { Fragment } from 'react';
import Header from './components/layout/Header';
import Products from './components/product/Products';
import Footer from './components/layout/Footer';
import Cart from './components/cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () => {
    setShowCart(!showCart);
  } 
  return (
    <Fragment>
      <Header showCart={ showCartHandler} />
      <main>
        { showCart && <Cart showCart={showCartHandler} /> }
        <Products />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
