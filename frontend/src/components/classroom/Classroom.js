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
    module: null,
    chunk: {},
    collapsed: false,
    openChapter: null,
    openChunk: null,
  }

  updateProgress = async (chunkId) => {
    console.log('chunk update', chunkId)
    try {
      const res = await axios.put(`/api/auth/user/progress/chunk/${chunkId}/`, {module_id: this.state.module.id}, {
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`
        }
      })
      console.log(res)
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  setSidebarOpen = (chapter = null, chunk = null) => {
    this.setState({ openChapter: chapter, openChunk: chunk })
  }

  onSelectionClick = (event, data_name, title, single) => {
    title ? this.setState({ openChapter: data_name }) : this.setState({ openChunk: data_name })
    console.log(this.state.openChapter, this.state.openChunk)
    if (single) this.setState({ openChunk: null })
    // if (single) this.props.history.push(`/${this.props.match.params.data_name}/${this.props.match.params.module_name}/${data_name}`)
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
    if (!this.state.module) return null
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
          userInfo={this.state.user}
          openChapter={this.state.openChapter}
          openChunk={this.state.openChunk}
          onSelectionClick={this.onSelectionClick}
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
            updateProgress={this.updateProgress}
            setSidebarOpen={this.setSidebarOpen}
          />
        </section>
      </main>
    )
  }
}

export default Classroom