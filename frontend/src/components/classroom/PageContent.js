import React from 'react'
import Markdown from 'markdown-to-jsx'

import Next from './common/Next'
import Back from './common/Back'
import HoverText from './content_components/HoverText'
import SelectText from './content_components/SelectText'
import TextComparison from './content_components/TextComparison'

class PageContent extends React.Component {

  state = {
    page: null,
    text: '',
    textTest: 'The most basic form of a sentence in Japanese is to simply declare that **Something is another thing**. These sentences are formed with the following <HoverText text={structure}/>:↵↵<p class="text_alone">\\_\\_\\_\\_\\_\\_は \\_\\_\\_\\_\\_\\_です</p><TextComparison text={[["I am a teacher", "わたしはせんせいです"]]}/>In the rest of the lesson, we’ll cover five **classes of complexity** in algorithms; in other words, break down the “highly efficient,” “pretty good,” and “inefficient” groups that we just discussed.↵↵<SelectText text={[["This is a", "test sentence"], ["Text one", "Text two"]]} />↵↵Here they are:↵↵| Highly Efficient | Pretty Good | Inefficient |↵| --- | --- | --- |↵| Constant complexity | Linear complexity | Quadratic complexity |↵| Logarithmic complexity | | Factorial complexity |',
    textTest2: '<div class="content_inner_container">Unfortunatly that isn\'t quite the end of it for different way to say **not** in Japanese! It is important to note that the <span class="blue_text">**じゃ**</span> part of <span class="blue_text">**じゃあません**</span> and <span class="blue_text">**じゃない**</span> is actually a shortening of <span class="blue_text">**では**</span>↵↵This means that both of the ways we just learnt to express **not** can also be formed as the following↵↵<p class="text_alone blue_text">\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_ではありません</p>↵↵<p class="text_alone blue_text">\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_ではない</p>Using <span class="blue_text">**では**</span> can come across as a bit more formal or bookish, like saying **is not** over **isn\'t**.↵↵<sup>Note: as with the particle <span class="blue_text">**は**</span>, the <span class="blue_text">**は**</span> in <span class="blue_text">**では**</span> is pronounced **wa**.</sup></div>',
  }

  componentDidMount() {
    this.setState({ text:this.props.page.content })
  }

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.setState({ text:this.props.page.content })
    }
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
        <div className="content_inner_flex_container">
        {page.page_no !== 1 && 
          <Back collapsed={this.props.collapsed} path={`${this.props.pathURL}${page.page_no - 1}`}/>
        }
          {page.title && <h1>{page.title}</h1>}
          <Markdown
            options={{
              overrides: {
                HoverText: {
                  component: HoverText,
                  props: {
                    onHover: this.onHover
                  }
                },
                SelectText: {
                  component: SelectText
                },
                TextComparison: {
                  component: TextComparison,
                  props: {
                  }
                }
              }
            }}
          >
            {this.textConversion(this.state.text)}
            </Markdown>
        {page.page_no !== this.props.totalPages ?
          <Next path={`${this.props.pathURL}${page.page_no + 1}`}/> :
          <Next path={`${this.props.pathURL}test`}/>
        }
        </div>
    )
  }
}

export default PageContent