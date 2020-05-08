import React from 'react'

import Markdown from 'markdown-to-jsx'

import { Link } from 'react-router-dom'

import Auth from '../../../lib/auth'

function ModuleInfoInner(props) {

  function textConversion(input) {
    return input.replace(/↵/g, '\n')
  }

  // ↵↵* Sentence Structure↵↵* Possession↵↵* Questions↵↵* Verb Conjugations
  return (
    <div className="module_modal_outer">
      <div className="module_modal_inner">
        <div className="module_info_upper">
          <h2 className="module_description_header">{props.module.name}</h2>
          <hr className="module_description_rule"/>
          <div className="module_description_content">
            <h4 className="module_description_subheader">What this module will teach you:</h4>
            <Markdown>
            {textConversion(props.module.description)}
            </Markdown>
            <h4 className="module_description_subheader">Chapters: {props.module.chapters.length}</h4>
          </div>
          {/* {props.module.name} */}
        </div>
        <div className="module_info_buttons">
        {Auth.isAuthenticated() ?
          <Link to={{
            pathname: props.urlcomp,
            fromProps: {
              accepted: true
            }
          }}><button 
            onClick={props.addModuleUser}
            className="select_button"
          >Select</button></Link> :
          <Link to="/login"><button>Login</button></Link>
        }
          <button className="cancel_button" onClick={props.toggleModal}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ModuleInfoInner