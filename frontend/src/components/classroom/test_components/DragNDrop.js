import React from 'react'

class DragNDrop extends React.Component {

  state = {
    question: null,
    input: [],
    correct: false
  }

  componentDidMount() {
    const question = JSON.parse(JSON.stringify(this.props.question))
    question.extra = JSON.parse(question.extra)
    const input = JSON.parse(JSON.stringify(question.extra))
    question.question = JSON.parse(question.question)
    this.setState({ question, input })
  }

  randomTilt = () => {
    return Math.floor((Math.random() * 20) - 5)
  }

  onSelect = (event) => {
    const input = JSON.parse(JSON.stringify(this.state.input))
    for (let i = 0; i < input.length; i++) {
      if (!input[i].value) {
        input[i].value = event.target.getAttribute('data_value')
        break
      }
    }
    if (input.map(segment => segment.value).join('') === this.state.question.answer.replace(/\s/g, '')) {
      this.setState({ correct: true, input })
      this.props.updateCorrect()
    } else {
      this.setState({ input })
    }
  }

  removeSelected = (segmentClicked) => {
    const input = JSON.parse(JSON.stringify(this.state.input))
    input.find(segment => segment.value === segmentClicked.value).value = ""
    this.setState({ input })
  }

  render() {
    if (!this.state.question) return null
    console.log(this.state.correct)
    return (
      <div className="question_container">
        <div className="drag_n_drop_container">
          {/* <h4>{this.state.question.specific_instruction}</h4> */}
          <div className="drag_n_drop_template">
          {this.state.input.map((segment, index) => (
            <span 
              className={`drag_n_drop_segment ${segment.user && 'drag_n_drop_empty_segment'} ${this.state.correct && 'drag_n_drop_correct_segment'}` }
              key={index}
              onClick={segment.user && segment.value && !this.state.correct ? () => this.removeSelected(segment) : null}
            > {segment.value} </span>
          ))}
          </div>
          <div className="drag_n_drop_options">
            {this.state.question.question.map(option => (
              <div 
                key={option.i}
                data_value={option.value}
                className={`drag_n_drop_option_card ${this.state.correct && 'drag_n_drop_option_card_disabled'}`}
                onClick={!this.state.correct ? this.onSelect : null}
                // style={{
                //   transform: `rotate(${this.randomTilt()}deg)`
                // }}
              >{option.value}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default DragNDrop