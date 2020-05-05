import React from 'react'

import { Link } from 'react-router-dom'

import Auth from '../../../lib/auth'

function ModuleInfoInner(props) {
return (
  <div className="module_modal_outer">
    <div className="module_modal_inner">
      <div className="module_info_upper">
        {props.module.name}
      </div>
      <div className="module_info_buttons">
      {Auth.isAuthenticated() ?
        <Link to={{
          pathname: props.urlcomp,
          fromProps: {
            accepted: true
          }
        }}><button onClick={props.addModuleUser}>Select</button></Link> :
        <Link to="/login"><button>Login</button></Link>
      }
        <button className="cancel_button" onClick={props.toggleModal}>Cancel</button>
      </div>
    </div>
  </div>
)
}

export default ModuleInfoInner