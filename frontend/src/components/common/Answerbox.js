import React from 'react'

function Answerbox(props) {


  return (
    <div>
      {console.log(!props.disabled)}
      <input 
        onChange={props.onChange}
        className={props.correct ? 'correct_answer': ''}
        value={props.input}
        disabled={props.disabled}
        autoFocus={!props.disabled}
      />
    </div>
  )
}

export default Answerbox