import React from 'react'
import { Link } from 'react-router-dom'

import ModuleInner from './ModuleInner'

function Module(props) {

  return (
    <div>
      {!props.single ?
      <ModuleInner 
        onSelectionClick={props.onSelectionClick}
        open={props.openChapter === props.data.data_name}
        title={true}
        text={props.data.name}
        data_name={props.data.data_name}
        id={props.data.id}
        chapterProgress={props.chapterProgress}
      /> : 
      <Link to={`/cr/${props.subject}/${props.module}/${props.data.data_name}/`}>
      <ModuleInner 
        onSelectionClick={props.onSelectionClick}
        open={props.openChapter === props.data.data_name}
        title={true}
        single={props.single}
        text={props.data.name}
        data_name={props.data.data_name}
        id={props.data.id}
        chapterProgress={props.chapterProgress}
      />
      </Link> 
      }
      <div 
        className="module_dropdown"
        style={{
          display: props.openChapter === props.data.data_name ? 'block' : 'none',
        }}
      >
        <div className="module_dropdown_line"></div>
        {props.data.chunks.sort((a, b) => a.order - b.order).map(chunk => {
          if (chunk.data_type === 'lesson') {
            return (
            // <Link key={chunk.data_name} to={`${props.params}/${chunk.data_name}/1`}>
            <Link key={chunk.data_name} to={`/cr/${props.subject}/${props.module}/${props.data.data_name}/${chunk.data_name}/1`}>
              <ModuleInner 
              onSelectionClick={props.onSelectionClick}
              title={false}
              text={chunk.name}
              data_name={chunk.data_name}
              open={props.openChunk === chunk.data_name}
              id={chunk.id}
              chunkProgress={props.chunkProgress}
              />
            </Link>
          )
            } else if (chunk.data_type === 'test') {
              return (
                <Link key={chunk.data_name} to={`/cr/${props.subject}/${props.module}/${props.data.data_name}/${chunk.data_name}/test`}>
                <ModuleInner 
                onSelectionClick={props.onSelectionClick}
                title={false}
                text={chunk.name}
                data_name={chunk.data_name}
                id={chunk.id}
                chunkProgress={props.chunkProgress}
                open={props.openChunk === chunk.data_name}
                />
              </Link>
              )
            } else if (chunk.data_type === 'vocab') {
              return (
                <Link key={chunk.data_name} to={`/cr/${props.subject}/${props.module}/${props.data.data_name}/${chunk.data_name}/vocab`}>
                <ModuleInner 
                  onSelectionClick={props.onSelectionClick}
                  title={false}
                  text={chunk.name}
                  data_name={chunk.data_name}
                  id={chunk.id}
                  chunkProgress={props.chunkProgress}
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