import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
// import Module from '../classroom/sidebar/Module'

class SubjectModules extends React.Component {
  
  state = {
    subject: '',
    modules: []
  }

  async componentDidMount() {
    const data_name = this.props.match.params.data_name.toLowerCase()
    try {
      const res = await axios.get(`/api/subjects/${data_name}/`)
      this.setState({ modules: res.data.modules, subject: res.data.data_name })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        {this.state.modules.map(module => (
          <Link key={module.data_name} to={`/${this.state.subject}/${module.data_name}`}>{module.name}</Link>
        ))}
      </div>
    )
  }
}

export default SubjectModules