import React from 'react'

import Next from './common/Next'

class VocabContent extends React.Component {

  state = {
    vocab: {

    }
  }

  componentDidMount() {
    const vocab = {}
    for (let i = 0; i < this.props.vocab.length; i++) {
      if (!vocab[this.props.vocab[i].vocab_type]) {
        vocab[this.props.vocab[i].vocab_type] = [this.props.vocab[i]]
      } else {
        vocab[this.props.vocab[i].vocab_type].push(this.props.vocab[i])
      }
    }
    this.setState({ vocab })
  }
  render() {
    return (
      <div className="content_inner_flex_container">
        <h1>Vocab</h1>
        <div className="content_inner_container">
          <table className="vocab_table">
            {/* <tbody> */}
          {Object.keys(this.state.vocab).map(vocabType => (
            <tbody　key={vocabType}>
            <tr className="vocab_table_type_head">
              <th colSpan="2">{vocabType}</th>
            </tr>
            {this.state.vocab[vocabType].map(vocab => (
              <tr key={vocab.id}>
                <td>{vocab.native}</td>
                <td>{vocab.translation}</td>
              </tr>
            ))}
            </tbody>
          ))}
          </table>
        </div>
        <Next path={`${this.props.pathURL}vocab/test`}/>
      </div>
    )
  }
}

export default VocabContent