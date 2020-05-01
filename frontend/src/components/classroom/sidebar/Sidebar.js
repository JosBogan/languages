import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import Module from './Module'

class Sidebar extends React.Component {

  state = {
    open: null,
    openChunk: null,
    initialChapter: null,
    module: null
  }

  componentDidUpdate(prevProps) {
    const module = JSON.parse(JSON.stringify(this.props.module))
    module.chapters.sort((a, b) => a.order - b.order)
    if (prevProps !== this.props) {
      this.setState({ module })
    }
  }

  onModuleClick = (event, data_name, title, single) => {
    title ? this.setState({ open: data_name }) : this.setState({ openChunk: data_name })
    if (single) this.props.history.push(`/${this.props.match.params.data_name}/${this.props.match.params.module_name}/${data_name}`)
  }

  render() {
    if (!this.state.module) return null
    return (
      <div 
        className="sidebar_wrapper"
        style={{
          transform: this.props.collapsed ? 'translateX(-300px)' : 'none'
        }}
      >
        <div className="sidebar_inner_wrapper">
          <div className="sidebar_nav_wrapper">
            <ul className="sidebar_nav">
              <Link to="/"><li><FontAwesomeIcon icon={faHome}/></li></Link>
              <Link to="/dashboard"><li><FontAwesomeIcon icon={faUser}/></li></Link>
              <Link to="/"><li><FontAwesomeIcon icon={faCog}/></li></Link>
            </ul>
          </div>
          <div className="all_module_container">
            {this.state.module.chapters.map(chapter => (
              <Module 
                key={chapter.data_name}
                onModuleClick={this.onModuleClick}
                open={this.state.open === chapter.data_name}
                openChunk={this.state.openChunk}
                data={chapter}
                module={this.state.module.data_name}
                single={chapter.single}
                subject={this.props.match.params.subject_name}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Sidebar)