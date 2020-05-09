import React from 'react'
import axios from 'axios'

import { Switch, Route } from 'react-router-dom'

import PageContent from './PageContent'
// import Alphabet from '../japanese/Alphabet'
import TestContent from './TestContent'
import VocabContent from './VocabContent'
import VocabTest from './VocabTest'

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
    this.props.setSidebarOpen(this.props.match.params.chapter_name, this.props.match.params.chunk_name)
    this.getChunk()
  }
  
  // componentDidMount() {
    // this.props.setSidebarOpen(this.props.match.params.chapter_name, this.props.match.params.chunk_name)
  // }

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
          {this.state.chunk.pages.map(page => (
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
            ))
          }
          <Route 
            path={`${this.props.match.url}/test`}
            render={(props) => (
              <TestContent {...props} 
                questions={this.state.chunk.questions} 
                pathURL={`${this.props.match.url}/`}
                // nextChunkPathURL={}
                collapsed={this.props.collapsed}
                totalPages={this.state.chunk.pages.length}
                updateProgress={this.props.updateProgress}
                chunkId={this.state.chunk.id}
              />
            )}
          />
            <Route 
              path={`${this.props.match.url}/vocab/test`}
              render={(props) => (
                <VocabTest {...props} 
                  vocab={this.state.chunk.vocab} 
                  pathURL={`${this.props.match.url}/`} 
                  collapsed={this.props.collapsed}
                  totalPages={this.state.chunk.pages.length}
                  chunkId={this.state.chunk.id}
                  updateProgress={this.props.updateProgress}
                />
              )}
            />
          <Route 
            path={`${this.props.match.url}/vocab`}
            render={(props) => (
              <VocabContent {...props} 
                vocab={this.state.chunk.vocab} 
                pathURL={`${this.props.match.url}/`} 
                collapsed={this.props.collapsed}
                totalPages={this.state.chunk.pages.length}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Page