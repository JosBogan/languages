import React from 'react'

// import { Link } from 'react-router-dom'

function ModuleCard(props) {
  return (
    // <Link to={`${props.urlcomp}`}>
      <div 
        className="module_card_container"
        onClick={(event) => {
          if (!props.userStarted) {
            props.toggleModal(event)
            props.setModal(event, props.module)
          } else {
            props.directLink(props.module)
          }
        }
        }
      >
        <div className="module_card_details">
          <h2>{props.module.name}</h2>
          <p className="module_card_subject">{props.subject[0].toUpperCase() + props.subject.slice(1)}</p>
        </div>
        <div className="module_card_progress_containter">
          <div className="progress_bar_container">
            <div 
              className="progress_bar"
              style={{
                width: `${props.progression}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    // </Link>
  )
}

export default ModuleCard