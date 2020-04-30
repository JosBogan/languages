import React from 'react'
import { Link } from 'react-router-dom'

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
          if (chunk.data_type === 'lesson') {
            return (
            <Link key={chunk.data_name} to={`${props.params}/${chunk.data_name}/1`}>
              <ModuleInner 
              onModuleClick={props.onModuleClick}
              title={false}
              text={chunk.name}
              data_name={chunk.data_name}
              open={props.openChunk === chunk.data_name}
              />
            </Link>
          )
            } else if (chunk.data_type === 'test') {
              return (
                <Link key={chunk.data_name} to={`${props.params}/${chunk.data_name}/test`}>
                <ModuleInner 
                onModuleClick={props.onModuleClick}
                title={false}
                text={chunk.name}
                data_name={chunk.data_name}
                open={props.openChunk === chunk.data_name}
                />
              </Link>
              )
            } else if (chunk.data_type === 'vocab') {
              return (
                <Link key={chunk.data_name} to={`${props.params}/${chunk.data_name}/vocab`}>
                <ModuleInner 
                  onModuleClick={props.onModuleClick}
                  title={false}
                  text={chunk.name}
                  data_name={chunk.data_name}
                  open={props.openChunk === chunk.data_name}
                />
              </Link>
              )
            }
        })}
      </div>
    </div>
  )
}

export default Module