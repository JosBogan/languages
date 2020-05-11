import React from 'react'
import AnswerBox from '../common/Answerbox'

class DirectQuestion extends React.Component {

  state = {
    correct: false,
    disabled: false
  }

  onChange = (event) => {
    const val = event.target.value
    if (val === this.props.question.answer) {
      // const score = this.state.score + 1
      this.props.updateCorrect()
      this.setState({ correct: true, disabled: true })
    } else {
      this.setState({ correct: false })
    }

  }

  render() {
    return (
    <div className="question_container"> 
      <p className="question_text">{this.props.question.question}</p>
      <AnswerBox
        onChange={this.onChange}
        correct={this.state.correct}
        disabled={this.state.disabled}
      />
    </div>
    )
  }
}

export default DirectQuestion