import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const items = [
    {
      id: 'p1',
      title: 'Test',
      price: 6,
      desc: 'This is a first product - amazing!',
    },
    {
      id: 'p2',
      title: 'Test2',
      price: 5,
      desc: 'This is a second product - great!',
    }
  ] 
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          items.map(item => <ProductItem key={item.id} item={item}
          />)
        }
        
      </ul>
    </section>
  );
};

export default Products;
