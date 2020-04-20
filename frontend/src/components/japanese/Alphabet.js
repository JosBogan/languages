import React from 'react';
// import './App.css';
import axios from 'axios'

// import headers from './lib/headers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

class Alphabet extends React.Component {

  state = {
    alphabet: [],
    rowHovered: null,
    rowsSelected: {
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/lang/jp/alpha/')
      console.log(res.data)
      const rows = res.data.reduce((acc, char)=> {
        let newAcc = JSON.parse(JSON.stringify(acc))
        acc.length < char.row ? newAcc.push([char]) : newAcc[char.row - 1].push(char)
        return newAcc
      }, [])
      this.setState({ alphabet: rows })
    } catch(err) {
      // console.log(err)
    }
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

  // rowSelectHoverEvent = (event) => {
  //   event.stopPropagation()
  //   switch (event.type) {
  //     case 'mouseenter':
  //       console.log(event.target.getAttribute('name'))
  //         this.setState({ rowHovered: event.target.getAttribute('name') })
  //       break
  //     case 'mouseleave':
  //         this.setState({ rowHovered: null })
  //       break
  //   }
  // }

  render() {
    // if (!this.state.alphabet) return
    // console.log(this.state.rowHovered)
    return (
      // <div className="App">
        <section className="alphabet_container">
          <div className="alphabet_container_inner">
            {this.state.alphabet.map(row => {
              return (
                <div 
                  className="alphabet_row_container"
                  key={row[0].row}
                  name={row[0].row}
                  onClick={this.handleRowSelect}
                >
                  {/* {console.log(row[0].row)} */}
                  <div
                    // className={`alphabet_row_selected ${parseInt(this.state.rowHovered) === parseInt(row[0].row) && 'alphabet_row_selected_hover'}`}
                    className="alphabet_row_selected"
                    name={row[0].row}
                    // onMouseEnter={this.rowSelectHoverEvent}
                    // onMouseLeave={this.rowSelectHoverEvent}
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
        </section>
      // </div>
    )
  }
}

export default Alphabet;
