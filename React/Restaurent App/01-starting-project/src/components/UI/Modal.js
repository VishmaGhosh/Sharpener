import React from 'react'
import ReactDom from 'react-dom'
import { Fragment } from 'react/cjs/react.production.min'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('modal-root'))}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , document.getElementById('modal-root'))}
        </Fragment>
    )
}

export default Modal