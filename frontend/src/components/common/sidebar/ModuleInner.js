import React from 'react'

function ModuleInner(props) {

  return (
    <div>
      <div 
        className={`module_container ${props.title && props.open && 'module_container_open'}`}
        onClick={props.title && props.onClick}
        style={{
          fontSize: props.title ? '20px' : '15px',
          margin: props.title ? '30px 0 0 0' : '20px 0 0 0',
          // margin: props.title ? '0' : '0 0 0 -7px'

        }}
        >
        <div className={'module_circle'}></div>
        <div className="module_line"></div>
        <div className="module_name">{props.text}</div>
      </div>
    </div>
  )
}

export default ModuleInner