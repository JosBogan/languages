import React from 'react'

import { Link } from 'react-router-dom'

function Next(props) {

  return (
    <Link to={{
      pathname: "/alphabet/test",
      state: {
        rowsSelected: props.rowsSelected
      }
    }}>
      <div className="next_button">
      </div>
    </Link>
  )
}

export default Next