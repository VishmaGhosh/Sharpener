import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartButtonActions } from '../../store/cartButton';

const CartButton = (props) => {
  const dispatch = useDispatch()

  const cartHandler = (e) => {
    e.preventDefault();
    dispatch(cartButtonActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
