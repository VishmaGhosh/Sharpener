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

function App() {
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () => {
    setShowCart(!showCart);
  } 
  return (
    <CartContextProvider>
      <Header showCart={ showCartHandler} />
      <main>
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
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
