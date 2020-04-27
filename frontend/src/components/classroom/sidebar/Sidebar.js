import React from 'react'
import { withRouter } from 'react-router-dom'

import Module from './Module'

class Sidebar extends React.Component {

  state = {
    open: null,
    openChunk: null,
    module: {

    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ module: this.props.module })
    }
  }

  onChapterClick = () => {

  }

  onChunkClick = () => {

  }

  onModuleClick = (event, data_name, title) => {
    // console.log(title, data_name)
    title ? this.setState({ open: data_name }) : this.setState({ openChunk: data_name })
  }

  render() {
    if (Object.keys(this.state.module).length === 0) return null
    console.log(this.state.open, this.state.openChunk)
    return (
      <div className="sidebar_wrapper">
        <div className="sidebar_inner_wrapper">
          <div className="all_module_container">
            {this.state.module.chapters.map(chapter => (
              <Module 
              key={chapter.data_name}
              onModuleClick={this.onModuleClick}
              open={this.state.open === chapter.data_name}
              openChunk={this.state.openChunk}
              data={chapter}
              params={`/${this.props.match.params.data_name}` + `/${this.props.match.params.module_name}`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Sidebar)