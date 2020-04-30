import React from 'react'

function Answerbox(props) {


  return (
    <div className="answerbox_container">
      {console.log(!props.disabled)}
      <input 
        onChange={props.onChange}
        className={props.correct ? 'answerbox correct_answer': 'answerbox'}
        // value={props.input}
        disabled={props.disabled}
        autoFocus={!props.disabled}
        style={{
          width: props.width
        }}
      />
    </div>
  )
}

export default Answerbox