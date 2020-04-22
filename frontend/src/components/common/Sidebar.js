import React from 'react'

import Module from './sidebar/Module'

class Sidebar extends React.Component {

  state = {
    open: false
  }

  onClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div className="sidebar_wrapper">
        <div className="sidebar_inner_wrapper">
          <div className="all_module_container">
            <Module 
              onClick={this.onClick}
              open={this.state.open}
            />
          </div>
        </div>
      </div>
    )
  }

}

export default Sidebar