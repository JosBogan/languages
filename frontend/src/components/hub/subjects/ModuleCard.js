import React from 'react'

import { Link } from 'react-router-dom'

function ModuleCard(props) {

  return (
    <Link to={`${props.urlcomp}`}>
      <div className="module_card_container">
        <div className="module_card_details">
          <h2>{props.module.name}</h2>
          <h5 className="module_card_subject">{props.subject}</h5>
        </div>
        <div className="module_card_progress_containter">
          <div className="progress_bar_container">
            <div className="progress_bar"></div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ModuleCard