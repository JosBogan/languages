import React from 'react'

function HoverText(props) {



  return (
    <span
      className="hover_text"
      onMouseEnter={props.onHover}
      onMouseLeave={props.onHover}
    >
      {props.text}
    </span>
  )
}

export default HoverText