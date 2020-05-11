import React from 'react'

import Back from './common/Back'
// import Next from './common/Next'

import DirectQuestion from './test_components/DirectQuestion'
import DragNDrop from './test_components/DragNDrop'

class TestContent extends React.Component {

  state = {
    questions: null,
    correct: 0
  }

  componentDidMount() {
    const questions = {}
    for (let i = 0; i < this.props.questions.length; i++) {
      if (!questions[this.props.questions[i].question_type]) {
        questions[this.props.questions[i].question_type] = [this.props.questions[i]]
      } else {
        questions[this.props.questions[i].question_type].push(this.props.questions[i])
      }
    }
    this.setState({ questions })
  }

  updateCorrect = () => {
    const score = this.state.correct + 1
    console.log(Object.values(this.state.questions).flat(), score)
    if (score >= Object.values(this.state.questions).flat().length) this.props.updateProgress(this.props.chunkId)
    this.setState({ correct: score })
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
          {/* <h2 className="question_type_header">{questionType[0].toUpperCase() + questionType.slice(1)}</h2> */}
          {this.state.questions[questionType].map(question => {
            if (questionType === 'direct') {
            return (
            <DirectQuestion 
            key={question.id}
            question={question}
            updateCorrect={this.updateCorrect}
          />
          )} else if (questionType === 'multiple_choice') {
            return (
              <DragNDrop 
              key={question.id}
              question={question}
              updateCorrect={this.updateCorrect}
          />
            )
          }
          })}
          </div>
        ))}
        {/* <DragNDrop 
          question={this.state.testQuestion}
          updateCorrect={this.state.updateCorrect}
        /> */}
        </div>
        {/* {this.state.score >= this.state.questions.translate.length &&
          <Next path={`${this.props.pathURL}/1/`}/> // CHANGE PATH
        } */}
      </div>
    )
  }
}

export default TestContent