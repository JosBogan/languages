import React from 'react'
import { Link } from 'react-router-dom'

function SubjectCard(props) {
  return (
    <Link to={`/${props.subject.data_name}`}>
      <div className="subject_card_container">
        <div className="subject_image"></div>
        <div className="subject_card_header_container">
          <h3 className="subject_card_header">{props.subject.name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default SubjectCard