import React from 'react'

function Modal(props) {

    return (
      <>
      <div 
        onClick={props.toggleModal}
        className="modal_background"
      >
      </div>
      {props.component}
      </>
    )
}

export default Modal