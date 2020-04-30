import React from 'react'
// import { Switch } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Page from './Page'

class ClassroomContent extends React.Component {

  state = {
    module: null,

  }

  async componentDidMount() {
    // try {
    //   const res = await axios.get('/api/chapters/jp_1_1')
    //   console.log(res.data)
    // } catch (err) {
    //   console.log(err)
    // }
    this.setState({ module: this.props.module })
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ module: this.props.module })
    }
  }

  render() {
    return (
      <Switch>
        <Route 
          path="/:data_name/:module_name/:chunk_name"
          render={(props) => <Page {...props} collapsed={this.props.collapsed}/>}/>
        {/* <Route path="/:data_name/:module_name/:chunk_name" component={Page}/> */}
      </Switch>
    )
  }
}

export default ClassroomContent