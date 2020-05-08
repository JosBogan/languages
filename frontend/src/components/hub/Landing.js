import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Landing extends React.Component {

  state = {
    subjects: []
  }


  async componentDidMount() {
    this.props.getUser()
    try {
      const res = await axios.get('/api/subjects/')
      this.setState({ subjects: res.data })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <main>
        <header>
          <nav></nav>
        </header>
        <section className="main_hero">
          <h1 className="main_hero_text">Placeholder Text</h1>
          <div>
            <Link className="landing_view_courses" to="/subjects" >View our Subjects</Link>
          </div>
        </section>
        <section
          style={{
            height: '200vh'
          }}
        >

        </section>
      </main>
    )
  }
}

export default Landing