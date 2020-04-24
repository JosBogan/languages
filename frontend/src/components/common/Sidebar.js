import React from 'react'

import Module from './sidebar/Module'

class Sidebar extends React.Component {

  state = {
    open: null,
    module: {

    }
  }

  componentDidMount() {
    // console.log(this.props)
    // this.setState({ module: this.props.module })
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ module: this.props.module })
    }
  }

  onClick = (event, data_name) => {
    // this.props.history.push(`/${this.state.module.data_name}/${}`)
    this.setState({ open: data_name })
  }

  render() {
    if (Object.keys(this.state.module).length === 0) return null
    return (
      <div className="sidebar_wrapper">
        <div className="sidebar_inner_wrapper">
          <div className="all_module_container">
            {this.state.module.chapters.map(chapter => (
              <Module 
              key={chapter.data_name}
              onClick={(event) => this.onClick(event, chapter.data_name)}
              open={this.state.open === chapter.data_name}
              data={chapter}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

}

export default Sidebar