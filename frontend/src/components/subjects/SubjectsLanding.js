import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class SubjectsLanding extends React.Component {

  state = {
    subjects: []
  }


  async componentDidMount() {
    try {
      const res = await axios.get('/api/subjects/')
      console.log(res.data)
      this.setState({ subjects: res.data })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        {this.state.subjects.map(subject => (
          <Link key={subject.data_name} to={`/${subject.data_name}`}>{subject.name}</Link>
        ))}
      </div>
    )
  }
}

export default SubjectsLanding