import React from 'react'
import Markdown from 'markdown-to-jsx'

import Parse from '../../../lib/parse'


class TextComparison extends React.Component {

  state = {
    textSegments: [],
    regex: null,
    split: null
  }

  componentDidMount() {
    const regex = new RegExp(`(${this.props.highlighted})`, 'g')
    const split = this.props.highlighted ? this.props.highlighted.split('|') : null
    this.setState({ textSegments: Parse.looseParse(this.props.text), regex, split })
  }

  highlightText = (data) => {
    if (!this.props.highlighted) return data
    let newText = data
    this.state.split.forEach(highlight => {
      const reg = new RegExp(highlight, 'g')
      newText = newText.replace(reg, `<span className="blue_text">${highlight}</span>`)
    })
    return newText
  }

  render() {
    return (
      <table className="comparison_table">
        <tbody>
        {this.state.textSegments.map((row, index) => (
          <tr key={index}>
            {row.map((data, index) => (
              <td
                key={index}
              >
                <Markdown>
                  {/* {data.replace(this.state.regex, `<span className="blue_text">${this.props.highlighted}</span>`)} */}
                  {this.highlightText(data)}
                </Markdown>
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    )
  }
}

export default TextComparison