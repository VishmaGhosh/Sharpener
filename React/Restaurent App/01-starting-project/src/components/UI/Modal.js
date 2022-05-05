import React from 'react'
import ReactDom from 'react-dom'
import { Fragment } from 'react/cjs/react.production.min'
import classes from './Modal.module.css'

const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop />, document.getElementById('modal-root'))}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , document.getElementById('modal-root'))}
        </Fragment>
    )
}

export default Modal