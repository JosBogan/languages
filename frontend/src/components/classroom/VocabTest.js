import React from 'react'

import Back from './common/Back'

import AnswerBox from './common/Answerbox'

class VocabTest extends React.Component {

  state = {
    vocab: null,
    currentVocab: null,
    transDirection: null,
    correct: false,
    input: ''
  }

  componentDidMount() {
    this.setState({ vocab:this.props.vocab, currentVocab: this.randomVocabGen(), transDirection: this.randomDirectionGen() })
  }

  randomDirectionGen = () => {
    return Math.round(Math.random())
  }

  randomVocabGen = () => {
    const vocab = this.state.vocab ? JSON.parse(JSON.stringify(this.state.vocab)) : JSON.parse(JSON.stringify(this.props.vocab))
    return vocab[Math.floor(Math.random() * vocab.length)]
  }

  onChange = (event) => {
    const val = event.target.value
    const answer = !this.state.transDirection ? this.state.currentVocab.native : this.state.currentVocab.translation
    if (val.toLowerCase() === answer.toLowerCase()) {
      this.props.updateProgress(this.props.chunkId) // LINE FOR PROGRESSION TESTING, TAKE OUT
      setTimeout(this.newLetter, 1000)
      this.setState({ correct: true, disabled: true, input: val })
    } else {
      this.setState({ correct: false, input: val })
    }
  }

  newLetter = () => {
    const currentVocab = this.randomVocabGen()
    const transDirection = this.randomDirectionGen()
    // const lang = this.languageRandomiser()
    // this.setState({ letters, currentLetter, lang })
    this.setState({ currentVocab, transDirection, correct: false, disabled: false, input: '' })
  }

  render() {
    if (!this.state.vocab) return null
    return (
      <div className="content_inner">
        <div className="content_inner_flex_container">
        <h1>Test</h1>
        <div className="vocab_test_container">
        <p className="question_text vocab_question">{this.state.transDirection ? this.state.currentVocab.native : this.state.currentVocab.translation}</p>
        <AnswerBox 
          onChange={this.onChange}
          correct={this.state.correct}
          disabled={this.state.disabled}
          input={this.state.input}
        />
        </div>
        <Back collapsed={this.props.collapsed} path={`${this.props.pathURL}vocab`}/>
        </div>
      </div>
    )
  }
}

export default VocabTest