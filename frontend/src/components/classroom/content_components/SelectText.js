import React from 'react'

class SelectText extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <>
      {/* {this.props.text} */}
        {this.props.text.map((component, index) => (
          <span 
            class="hover_text"
            key={index}
            id={index}
          >{component}</span>
        ))}
      </>
    )
  }
}

export default SelectText