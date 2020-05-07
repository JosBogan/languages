import React from 'react'
// import { Link } from 'react-router-dom'

import axios from 'axios'
// import Module from '../classroom/sidebar/Module'

import Auth from '../../../lib/auth'

import ModuleCard from './ModuleCard'
import Modal from '../../common/Modal'
import ModuleInfoInner from './ModuleInfoInner'

class SubjectModules extends React.Component {
  
  state = {
    subject: '',
    modules: null,
    modal: false,
    modalModule: null
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

  toggleModal = (event) => {
    this.setState({modal: !this.state.modal})
  }

  setModal = (event, module) => {
    this.setState({ modalModule: module})
  }

  // addModuleUser = async () => {
  //   try {
  //     const res = await axios.put('/api/auth/user/module/', 
  //     { module: this.state.modalModule.id }, 
  //     {
  //       headers: {
  //         Authorization: `Bearer ${Auth.getToken()}`
  //       }
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  addModuleUser = async () => {
    console.log('hello before')
    try {
      const res = await axios.post(`/api/auth/user/new_progress_module/${this.state.modalModule.id}/`, {},
      {
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`
        }
      })
      console.log('hello with data', res.data)
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
                // urlcomp={`/cr/${this.state.subject}/${module.data_name}`} 
                module={module}
                subject={this.state.subject}
                toggleModal={this.toggleModal}
                setModal={this.setModal}
              />
              // <Link key={module.data_name} to={`/${this.state.subject}/${module.data_name}`}>{module.name}</Link>
            ))}
          </div>
          <div className="subject_page_paths_container">

          </div>
        </section>
        {this.state.modal && 
          <Modal 
            toggleModal={this.toggleModal}
            component={
              <ModuleInfoInner 
                module={this.state.modalModule}
                urlcomp={`/cr/${this.state.subject}/${this.state.modalModule.data_name}`}
                toggleModal={this.toggleModal}
                addModuleUser={this.addModuleUser}
              />
            }
          />
        }
      </div>
    )
  }
}

export default SubjectModules