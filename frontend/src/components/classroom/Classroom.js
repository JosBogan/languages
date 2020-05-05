import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'

import Sidebar from './sidebar/Sidebar'
import ClassroomContent from './ClassroomContent'
// import Chunk from '../Chunk'
// import Page from './Page'

import Auth from '../../lib/auth'

class Classroom extends React.Component {

  state = {
    user: null,
    module: {},
    chunk: {},
    collapsed: false
  }

  // onChunkSelect = (event) => {
  //   this.setState({ chunk })
  // }

  async componentDidMount() {
    const data_name = this.props.match.params.module_name.toLowerCase()
    try {
      const res = await axios.get(`/api/modules/${data_name}`)
      this.setState({ module: res.data })
    } catch (err) {
      console.log(err)
    }
    this.getUser()
  }

  getUser = async () => {
    try {
      const res = await axios.get(`/api/auth/user/`, {
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`
        }
      })
      console.log(res.data)
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  collapseSideBar = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    // if (!this.state.user) return null
    // if (
    //   !this.props.location.fromProps && 
    //   (
    //   !this.state.user.completed_modules.includes(this.state.module.id) ||
    //   !this.state.user.current_modules.includes(this.state.module.id))
    //   ) return <Redirect to="/"/>
    return (
      <main className="page_container">
        <div 
          className="sidebar_collapse"
          onClick={this.collapseSideBar}
          style={{
            left: this.state.collapsed ? '20px' : '320px',
            transform: this.state.collapsed ? 'rotate(90deg)' : ''
          }}
        >
          <FontAwesomeIcon icon={faMinusSquare}/>
        </div>
        <Sidebar
          module={this.state.module}
          onChunkSelect={this.onChunkSelect}
          collapsed={this.state.collapsed}
        />
        <section 
          className="classroom_content_container"
          style={{
            marginLeft: this.state.collapsed ? '-300px' : '0'
          }}
        >
          {/* {console.log(this.state.module)} */}
          <ClassroomContent 
            module={this.state.module} 
            collapsed={this.state.collapsed}
          />
        </section>
      </main>
    )
  }
}

export default Classroom