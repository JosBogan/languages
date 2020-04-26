import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Next(props) {

  return (
    <Link to={{
      pathname: `${props.path}`,
      // state: {
      //   rowsSelected: props.rowsSelected
      // }
    }}>
      <div className="next_button">
        <FontAwesomeIcon className="fa_next" icon={faChevronRight}/>
      </div>
    </Link>
  )
}

export default Next