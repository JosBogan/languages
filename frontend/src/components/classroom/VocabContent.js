import React from 'react'

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
      <div className="content_inner">
        <h1>Vocab</h1>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
        {Object.keys(this.state.vocab).map(vocabType => (
          <>
          <tr key={vocabType}><td>{vocabType}</td></tr>
          {this.state.vocab[vocabType].map(vocab => (
            <tr>
              <td>{vocab.native}</td>
              <td>{vocab.translation}</td>
            </tr>
          ))}
          </>
        ))}
          </tbody>
        {/* {Object.keys(this.state.vocab).map(vocabType => (
          <div className="question_type_container" key={vocabType}>
          <h2>{vocabType}</h2>
          {this.state.vocab[vocabType].map(question => (
            <DirectQuestion 
            key={question.id}
            question={question}
          />
          ))}
          </div>
        ))} */}
        </table>
      </div>
    )
  }
}

export default VocabContent