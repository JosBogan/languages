import React from 'react'

class SelectText extends React.Component {

  state = {
    textSegments: [],
    relatedTextSegments: [],
    selectedText: 0
  }

  onSelectText = (event) => {
    const selectedText = event.target.id
    this.setState({ selectedText })
  }

  componentDidMount() {
    const components = JSON.parse(this.props.text)
    const textSegments = components[0]
    const relatedTextSegments = components[1]
    this.setState({ textSegments, relatedTextSegments })
  }

  render() {
    return (
      <div className="select_text_container">
        {this.state.textSegments.map((component, index) => (
          <span 
            className={`select_text ${parseInt(this.state.selectedText) === index ? 'select_text_selected' : ''}`}
            key={index}
            id={index}
            onClick={this.onSelectText}
          >{component}</span>
        ))}
        <p className="select_text_related">{this.state.relatedTextSegments[this.state.selectedText]}</p>
      </div>
    )
  }
}

export default SelectText