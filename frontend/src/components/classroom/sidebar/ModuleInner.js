import React from 'react'

function ModuleInner(props) {

  return (
    <div>
      <div 
        className={`module_container ${props.open && 'module_container_open'}`}
        onClick={(event) => props.onSelectionClick(event, props.data_name, props.title, props.single)}
        style={{
          fontSize: props.title ? '17px' : '15px',
          margin: props.title ? '30px 0 0 0' : '20px 0 0 0',
          // margin: props.title ? '0' : '0 0 0 -7px'

        }}
        >
        <div 
          className={`module_circle ${
            props.title ? props.chapterProgress.includes(props.id) ? 'sidebar_module_completed' : '' :
            props.chunkProgress.includes(props.id) ? 'sidebar_module_completed' : ''
          }`}
        ></div>
        <div className="module_line"></div>
        <div className="module_name">{props.text}</div>
      </div>
    </div>
  )
}

export default ModuleInner