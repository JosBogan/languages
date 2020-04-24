import React from 'react'

import ModuleInner from './ModuleInner'

function Module(props) {

  return (
    <div>
      <ModuleInner 
        onClick={props.onClick}
        open={props.open}
        title={true}
        text={props.data.name}
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
        {props.data.chunks.map(chunk => {
          return (
            <ModuleInner 
            key={chunk.data_name}
            text={chunk.name}/>
          )
        })}
        {/* <ModuleInner 
          text={props.data.name}/>
        <ModuleInner 
          text={props.data.name}/>
        <ModuleInner 
          text={props.data.name}/> */}
      </div>
    </div>
  )
}

export default Module