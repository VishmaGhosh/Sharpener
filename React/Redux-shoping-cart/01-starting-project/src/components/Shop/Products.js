import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const item = {
    id:'p1',
    title: 'Test',
    price: 6,
    desc: 'This is a first product - amazing!',
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem item={item}
        />
      </ul>
    </section>
  );
};

export default Products;
