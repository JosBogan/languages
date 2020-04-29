import React from 'react'

function Modal() {

    return (
      <div 
        onClick={this.closeModal}
        className="modal_background"
        style={{
          display: this.state.open ? 'flex' : 'none'
        }}
      >
        {props.component}
      </div>
    )
}

export default Modal