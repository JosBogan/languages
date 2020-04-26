import React from 'react'
import axios from 'axios'

import Sidebar from './sidebar/Sidebar'
import ClassroomContent from './ClassroomContent'
// import Chunk from '../Chunk'

class Classroom extends React.Component {

  state = {
    module: {},
    chunk: {}
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
  }

  render() {
    return (
      <main className="page_container">
        <Sidebar 
          module={this.state.module}
          onChunkSelect={this.onChunkSelect}
        />
        <section className="classroom_content_container">
          <ClassroomContent module={this.state.module}/>
        </section>
      </main>
    )
  }
}

export default Classroom