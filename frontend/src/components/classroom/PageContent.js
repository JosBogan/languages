import React from 'react'
import Next from './common/Next'
import Back from './common/Back'

class PageContent extends React.Component {

  state = {
    page: null
  }

  componentDidMount() {
    console.log(this.props.match)
    // document.addEventListener('keydown', this.keyboardPageChange)
  }

  // keyboardPageChange = (event) => {
  //   switch (event.keyCode) {
  //     case 39:
  //       this.props.history.push(`${this.props.path}${this.props.page.page_no + 1}`)
  //       break
  //     case 37:
  //       if (this.props.page.page_no === 1) break
  //       this.props.history.push(`${this.props.path}${this.props.page.page_no - 1}`)
  //       break
  //     default:
  //       break
  //   }
  // }

  render(){
    const { page } = this.props 
    return (
      <div>
        {page.page_no !== 1 && <Back path={`${this.props.path}${page.page_no - 1}`}/>}
        {page.title}
        {page.content}
        <Next path={`${this.props.path}${page.page_no + 1}`}/>
      </div>
    )
  }
}

export default PageContent