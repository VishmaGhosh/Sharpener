import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SentItem.module.css'

const SentItem = (props) => {
    return (

        <li className={classes.list}>
            <div>
                <input type="checkbox" />
                <Link to={`/sentbox/${props.item.id}`}><p>{props.item.to}</p></Link>
            </div>

            <p>{props.item.sub}</p>
            <p>time</p>
        </li>
    )
}

export default SentItem