import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
// import Module from '../classroom/sidebar/Module'

import ModuleCard from './ModuleCard'

class SubjectModules extends React.Component {
  
  state = {
    subject: '',
    modules: null
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
    if (!this.state.modules) return null
    return (
      <div className="subject_page_container">
        <div className="subject_header_container">
          <h1 className="subject_header">
            {this.state.subject[0].toUpperCase() + this.state.subject.slice(1)}
          </h1>
        </div>
        <section className="subject_page_content_container">
          <div className="subject_page_modules_contatiner">
            {this.state.modules.map(module => (
              <ModuleCard 
                key={module.data_name} 
                urlcomp={`/cr/${this.state.subject}/${module.data_name}`} 
                module={module}
                subject={this.state.subject}
              />
              // <Link key={module.data_name} to={`/${this.state.subject}/${module.data_name}`}>{module.name}</Link>
            ))}
          </div>
          <div className="subject_page_paths_container">

          </div>
        </section>
      </div>
    )
  }
}

export default SubjectModules