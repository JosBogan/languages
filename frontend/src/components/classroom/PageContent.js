import React from 'react'
import Next from './common/Next'
import Back from './common/Back'
import HoverText from './HoverText'

import Markdown from 'markdown-to-jsx'

class PageContent extends React.Component {

  state = {
    page: null,
    textTest: 'OK, now you know how to describe efficiency in basic terms. Now it’s time to get more <HoverText text={technical}/>.↵↵In the rest of the lesson, we’ll cover five **classes of complexity** in algorithms; in other words, break down the “highly efficient,” “pretty good,” and “inefficient” groups that we just discussed. Here they are:↵↵| Highly Efficient | Pretty Good | Inefficient |↵| --- | --- | --- |↵| Constant complexity | Linear complexity | Quadratic complexity |↵| Logarithmic complexity | | Factorial complexity |',
  }

  componentDidMount() {
    console.log('mounted')
  }

  onHover = () => {
    console.log('working')
  }

  textConversion = (input) => {
    return input.replace(/↵/g, '\n')
  }

  render(){
    const { page } = this.props 
    return (
      <div>
        {page.page_no !== 1 && <Back path={`${this.props.path}${page.page_no - 1}`}/>}
        {/* {page.title}
        {page.content} */}
        <div className="content_inner">
          {page.title && <h1>{page.title}</h1>}
          <Markdown
            options={{
              overrides: {
                HoverText: {
                  component: HoverText,
                  props: {
                    onHover: this.onHover
                  }
                }
              }
            }}
          >
            {this.textConversion(this.state.textTest)}
            </Markdown>
        </div>
        <Next path={`${this.props.path}${page.page_no + 1}`}/>
      </div>
    )
  }
}

export default PageContent