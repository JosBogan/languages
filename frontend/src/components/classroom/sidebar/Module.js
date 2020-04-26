import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import ModuleInner from './ModuleInner'

function Module(props) {

  return (
    <div>
      <ModuleInner 
        onModuleClick={props.onModuleClick}
        open={props.open}
        title={true}
        text={props.data.name}
        data_name={props.data.data_name}
      />
      <div 
        className="module_dropdown"
        style={{
          display: props.open ? 'block' : 'none',
        }}
      >
        <div 
          className="module_dropdown_line"
        ></div>
        {props.data.chunks.map(chunk => {
          return (
            <Link key={chunk.data_name} to={`${props.params}/${chunk.data_name}/1`}>
              <ModuleInner 
              onModuleClick={props.onModuleClick}
              text={chunk.name}
              data_name={chunk.data_name}
              open={props.openChunk === chunk.data_name}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Module