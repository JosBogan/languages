import React from 'react'

import ModuleInner from './ModuleInner'

function Module(props) {

  return (
    <div>
      <ModuleInner 
        onClick={props.onClick}
        open={props.open}
        title={true}
      />
      <div 
        className="module_dropdown"
        style={{
          display: props.open ? 'block' : 'none',
          // overflow: props.open ? 'visible' : 'hidden',
        }}
      >
        <div 
          className="module_dropdown_line"
        ></div>
        <ModuleInner />
        <ModuleInner />
        <ModuleInner />
      </div>
    </div>
  )
}

export default Module