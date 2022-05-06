import React,{useState} from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [shownCart, setShownCart] = useState(false);

  const shownCartHandler = () => {
    setShownCart(!shownCart);
  }
  
   return (
    <CartProvider>
      {shownCart && <Cart onClose={shownCartHandler} />}
      <Header onShownCart={shownCartHandler} />
      <main>
        <Meals />
      </main>
     </CartProvider>
  );
}

export default App;
