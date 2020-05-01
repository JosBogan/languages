import React from 'react'

import axios from 'axios'

import SubjectCard from './SubjectCard'

class SubjectIndex extends React.Component {

  state = {
    subjects: null
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/subjects/')
      this.setState({ subjects: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.subjects) return null
    return (
      <section>
        <h1 className="subjects_index_title">Subjects</h1>
        <div className="subject_container">
          {this.state.subjects.map(subject => (
            <SubjectCard 
              key={subject.data_name}
              subject={subject}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default SubjectIndex