import React from 'react'
import axios from 'axios'

import Alphabet from '../japanese/Alphabet'
import Test from '../japanese/Test'

import { Switch, Route } from 'react-router-dom'

class SoloChapter extends React.Component {

  state = {
    data: null
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`/api/chapters/${this.props.match.params.module_name}/${this.props.match.params.chapter_name}`)
      console.log(res.data)
      if (res.data.external_link) this.externalDataRetrieval(res.data.external_link)
    } catch (err) {
      console.log(err)
    }
  }

  externalDataRetrieval = async (url) => {
    console.log(url)
    try {
      const res = await axios.get(`/api/${url}/`)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.data) return null
    return (
      <div className="content_inner">
        <Switch>
          <Route 
            path="/cr/:subject_name/:module_name/:chapter_name/"
            render={(props) => (
              <Alphabet {...props} 
                alphabet={this.state.data}
              />)
            }/>
          <Route 
            path="/cr/:subject_name/:module_name/:chapter_name/test"
            render={(props) => (
              <Test {...props} 
                alphabet={this.state.data}
              />)
            }/>
        </Switch>
        {/* <Alphabet alphabet={this.state.data}/> */}
      </div>
    )
  }
}

export default SoloChapter 