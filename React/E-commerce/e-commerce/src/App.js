
import './App.css';
import { Fragment } from 'react';
import Header from './components/layout/Header';
import Products from './components/product/Products';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
