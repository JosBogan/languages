import React from 'react'

import Markdown from 'markdown-to-jsx'

class ModuleInfo extends React.Component {

  state = {
    module: null,
    getting_started: 'Welcome to Japanese 1! I sinceely hope that you enjoy the course that we have put together for you. Before you get started however, there are a couple of things that will help enhance your learning experince, so please have a quick read of the information below.↵↵###Keyboard Setup↵↵Throughout the course, there will be plenty of oppertunities for you to answer questions and type in Japanese. This will require using a Japanese keyboard, and whilst we do have an onscreen keyboard that you can click, we highly recommend adding the japanes keyboard input to your computer as shown below to make for a faster and more seamless experience.'
  }

  componentDidMount() {
  }

  textConversion = (input) => {
    return input.replace(/↵/g, '\n')
  }


  render() {
    if (!this.props.module.getting_started) return null
    return (
      <div className="content_inner">
        <h1>Getting Started</h1>
        <Markdown>
          {this.textConversion(this.props.module.getting_started)}
        </Markdown>
      </div>
    )
  }
}

export default ModuleInfo