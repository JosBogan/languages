import React from 'react'

import Answerbox from '../common/Answerbox'

class Test extends React.Component {

  state = {
    letters: [],
    currentLetter: {},
    // lang 0 = native language, lang 1 = learned language
    lang: 0,
    input: '',
    score: 0,
    correct: false,
    disabled: false
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
      setTimeout(this.newLetter, 1000)
      this.setState({ correct: true, input: val, disabled: true })
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

  render() {
    const currentLetter = this.state.currentLetter
    return (
      <div className="">
        {/* {this.state.lang ? currentLetter.character : currentLetter.translation} */}
        {currentLetter.character}
        <Answerbox 
          onChange={this.onChange} 
          correct={this.state.correct} 
          input={this.state.input}
          disabled={this.state.disabled}
        />
      </div>
    )
  }
}

export default Test