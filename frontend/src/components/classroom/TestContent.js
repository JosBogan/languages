import React from 'react'

import Back from './common/Back'

import DirectQuestion from './DirectQuestion'

class TestContent extends React.Component {

  state = {
    questions: null
  }

  componentDidMount() {
    const questions = {}
    for (let i = 0; i < this.props.questions.length; i++) {
      if (!questions[this.props.questions[i].instruction_type]) {
        questions[this.props.questions[i].instruction_type] = [this.props.questions[i]]
      } else {
        questions[this.props.questions[i].instruction_type].push(this.props.questions[i])
      }
    }
    this.setState({ questions })
  }

  render() {
    if (!this.state.questions) return null
    return (
      <div>
        <Back collapsed={this.props.collapsed} path={`${this.props.pathURL}${this.props.totalPages}`}/>
        <div className="content_inner">
        <h1>Test</h1>
        {Object.keys(this.state.questions).map(questionType => (
          <div className="question_type_container" key={questionType}>
          <h2>{questionType}</h2>
          {this.state.questions[questionType].map(question => (
            <DirectQuestion 
            key={question.id}
            question={question}
          />
          ))}
          </div>
        ))}
        </div>
      </div>
    )
  }
}

export default TestContent