import React from 'react';
// import './App.css';
import axios from 'axios'

// import headers from './lib/headers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import Next from '../classroom/common/Next'

class Alphabet extends React.Component {

  state = {
    alphabet: [],
    rowHovered: null,
    rowsSelected: {
    }
  }

  componentDidMount() {
    // this.props.alphabet
    const rows = this.props.alphabet.reduce((acc, char)=> {
      let newAcc = JSON.parse(JSON.stringify(acc))
      acc.length < char.row ? newAcc.push([char]) : newAcc[char.row - 1].push(char)
      return newAcc
    }, [])
    this.setState({ alphabet: rows })
  }

  handleRowSelect = (event) => {
    event.stopPropagation()
    if (!(event.target.getAttribute('name') in this.state.rowsSelected)) {
      const row = this.state.alphabet[parseInt(event.target.getAttribute('name')) - 1]
      const rowsSelected = JSON.parse(JSON.stringify(this.state.rowsSelected))
      rowsSelected[parseInt(event.target.getAttribute('name'))] = JSON.parse(JSON.stringify(row))
      this.setState({ rowsSelected })
    } else {
      const rowsSelected = JSON.parse(JSON.stringify(this.state.rowsSelected))
      delete rowsSelected[event.target.getAttribute('name')]
      this.setState({ rowsSelected })
    }
  }

  render() {
    return (
      <div className="alphabet_container_outer">
        <div className="alphabet_container_inner">
          {this.state.alphabet.map(row => {
            return (
              <div 
                className="alphabet_row_container"
                key={row[0].row}
                name={row[0].row}
                onClick={this.handleRowSelect}
              >
                
                <div
                  className="alphabet_row_selected"
                  name={row[0].row}
                >
                  <FontAwesomeIcon 
                    className="fa_icon" 
                    icon={parseInt(row[0].row) in this.state.rowsSelected ? faCheck : faCircle} 
                  />
                </div>
                <div
                  className="alphabet_row"
                >{
                  row.map(letter => (
                    <div
                      key={letter.character}
                      className="alphabet_character_container"
                    >
                      <div
                        className="alphabet_character"
                      >{letter.character}</div>
                      <div
                        className="alphabet_translation"
                      >{letter.translation}</div>
                    </div>
                  ))
                }</div>
              </div>
            )
          })}
        </div>
        {Object.keys(this.state.rowsSelected).length !== 0 && <Next rowsSelected={this.state.rowsSelected}/>}
      </div>
    )
  }
}

export default Alphabet;
