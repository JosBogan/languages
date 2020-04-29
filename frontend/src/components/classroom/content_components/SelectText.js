import React from 'react'
import Parse from '../../../lib/parse'

class SelectText extends React.Component {

  state = {
    textSegments: []
  }

  componentDidMount() {
    this.setState({ textSegments: Parse.looseParse(this.props.text) })
  }

  render() {
    console.log(this.props.selectedText)
    return (
      <p className="selelect_text_container">
        {this.state.textSegments.map((component, index) => (
          <span 
            className={`select_text ${parseInt(this.props.selectedText) === index ? 'select_text_selected' : ''}`}
            key={index}
            id={index}
            onClick={this.props.onSelectText}
          >{component}</span>
        ))}
      </p>
    )
  }
}

export default SelectText