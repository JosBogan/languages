import React from 'react'
import axios from 'axios'

import { Switch, Route } from 'react-router-dom'

import PageContent from './PageContent'
import Alphabet from '../japanese/Alphabet'

class Page extends React.Component {

  state = {
    chunk: null
  }

  getChunk = async () => {
    try {
      const res = await axios.get(`/api/chunks/${this.props.match.params.chunk_name}`)
      // console.log(res.data)
      this.setState({ chunk: res.data })
    } catch (err){
      console.log(err)
    }
  }

  async componentDidMount() {
    this.getChunk()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.chunk_name !== prevProps.match.params.chunk_name) {
      this.setState({ chunk: null })
      this.getChunk()
    }
  }

  render() {
    if (!this.state.chunk) return null
    return (
      <div>
        <Switch>
          {this.state.chunk.pages.length ? this.state.chunk.pages.map(page => (
            <Route 
              key={page.data_name}
              path={`${this.props.match.url}/${page.page_no}`} 
              render={(props) => (
                <PageContent {...props} 
                  page={page} 
                  pathURL={`${this.props.match.url}/`} 
                  collapsed={this.props.collapsed}
                  totalPages={this.state.chunk.pages.length}
                />
              )}
            />
            )) : 
            <Route 
              path={`${this.props.match.url}`}
              component={Alphabet} 
            />
          }
        </Switch>
      </div>
    )
  }
}

export default Page