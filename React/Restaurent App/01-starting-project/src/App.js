import React,{Fragment, useState} from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [shownCart, setShownCart] = useState(false);

  const shownCartHandler = () => {
    setShownCart(!shownCart);
  }
  
   return (
    <Fragment>
      {shownCart && <Cart />}
      <Header onShownCart={shownCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
