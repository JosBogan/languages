import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Back(props) {

  return (
    <Link to={props.path}>
      <div 
        className="back_button"
        style={{
          left: props.collapsed ? '50px' : '350px'
        }}
      >
        <FontAwesomeIcon className="fa_back" icon={faChevronLeft}/>
      </div>
    </Link>
  )
}

export default Back