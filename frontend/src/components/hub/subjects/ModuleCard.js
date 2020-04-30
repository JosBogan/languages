import React from 'react'

import { Link } from 'react-router-dom'

function ModuleCard(props) {

  return (
    <Link to={`${props.urlcomp}`}>
      <div className="module_card_container">
        <div className="module_card_details">
          <h3>{props.module.name}</h3>
        </div>
        <div className="module_card_progress_containter">
        </div>
      </div>
    </Link>
  )
}

export default ModuleCard