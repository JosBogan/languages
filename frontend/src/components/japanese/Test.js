import React from 'react'

import Answerbox from '../common/Answerbox'
import Back from '../common/Back'

class Test extends React.Component {

  state = {
    letters: [],
    currentLetter: {},
    // lang 0 = native language, lang 1 = learned language
    lang: 0,
    input: '',
    score: 0,
    correct: false,
    disabled: false,
    showPopup: false,
    showAnswer: false
  }

  letterRandomiser = (letters) => {
    return Math.floor(Math.random() * letters.length)
  }

  languageRandomiser = () => {
    return Math.round(Math.random())
  }

  componentDidMount() {
    const letters = Object.values(this.props.history.location.state.rowsSelected).flat()
    const currentLetter = letters[this.letterRandomiser(letters)]
    // const lang = this.languageRandomiser()
    // this.setState({ letters, currentLetter, lang })
    this.setState({ letters, currentLetter })
  }

  onChange = (event) => {
    const val = event.target.value
    // if (this.state.lang) {
    //   val === this.state.currentLetter.translation ? this.setState({ correct: true, input: val }) : this.setState({ correct: false, input: val })
    // } else {
    //   val === this.state.currentLetter.character ? this.setState({ correct: true, input: val }) : this.setState({ correct: false, input: val })
    // }
    if (val === this.state.currentLetter.translation) {
      const score = this.state.score + 1
      setTimeout(this.newLetter, 1000)
      this.setState({ correct: true, input: val, disabled: true, score })
    } else {
      this.setState({ correct: false, input: val })
    }
  }

  newLetter = () => {
    const letters = this.state.letters
    const currentLetter = letters[this.letterRandomiser(letters)]
    // const lang = this.languageRandomiser()
    // this.setState({ letters, currentLetter, lang })
    this.setState({ letters, currentLetter, disabled: false, correct: false, input: '' })
  }

  onMouseOver = (event) => {
    if (event.type === 'mouseenter') {
      this.setState({ showPopup: true })
    } else {
      this.setState({ showPopup: false, showAnswer: false })
    }
  }

  showAnswer = () => {
    this.setState({ showAnswer: true })
  }

  render() {
    const currentLetter = this.state.currentLetter
    return (
      <div className="">
        <Back />
        <div className="score">{this.state.score}</div>
        {/* {this.state.lang ? currentLetter.character : currentLetter.translation} */}
        <div className="test_character"
          onMouseEnter={this.onMouseOver}
          onMouseLeave={this.onMouseOver}
          onClick={this.showAnswer}
        >
        {currentLetter.character}
          {this.state.showPopup && 
          <div className="alphabet_answer_popup">
            {!this.state.showAnswer ? 'Click to uncover answer' : this.state.currentLetter.translation}
          </div>
        }
        </div>
        <Answerbox 
          onChange={this.onChange} 
          correct={this.state.correct} 
          input={this.state.input}
          disabled={this.state.disabled}
          width="300px"
        />
      </div>
    )
  }
}

export default Test