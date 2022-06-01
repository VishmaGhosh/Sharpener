import React,{useContext} from 'react'
import cartContext from '../../store/cart-context'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'
const MealInputForm = (props) => {
  const cartCtx = useContext(cartContext);

  const onClickHandler =(e) => {
    const quantity = Number(document.getElementById(props.meal.id).value);
    e.preventDefault();
    cartCtx.addItem({...props.meal, quantity: quantity});
    // console.log(cartCtx);
  }

  return (
    <form className={classes.form}>
        <Input label="Amount" input={{
            id: props.meal.id,
            type: "number",
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button onClick={onClickHandler}>+ Add</button>
    </form>
  )
}

export default MealInputForm