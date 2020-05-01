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
    textTest: 'The most basic form of a sentence in Japanese is to simply declare that **Something is another thing**. These sentences are formed with the following structure:↵↵<p class="text_alone blue_text">\\_\\_\\_\\_\\_\\_は \\_\\_\\_\\_\\_\\_です</p><TextComparison text={[["I am a teacher", "わたしはせんせいです"], ["Takeshi is a student", "たけしはがくせいです"], ["The teacher is english", "せんせはイギリスじんです"]]}/>**は** is the <span class="blue_text">**topic particle**</span> and indicates the topic of the sentence that comes just before. **です** is a copula verb that means **"to be"** or **"is"**.↵↵<sup>Note: whilst **は** is ordinarily pronounced **ha**, when used as a particle it is pronounced **wa**</sup>',
    textTest2: 'The particle <span class="blue_text">の</span> is extreemly versitile and can used to pair two nouns together to give second noun the property of, or further description expressed in the first noun. <span class="blue_text">の</span> can also describe the origin of something.↵↵<TextComparison highlighted={の}　text={[["Japanese friend", "にほんのともだち"]]}/>',
    selectText: null
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

  onSelectText = (event) => {
    this.setState({ selectText: event.target.id })
  }

  render(){
    const { page } = this.props 
    return (
      <div>
        {page.page_no !== 1 && 
          <Back collapsed={this.props.collapsed} path={`${this.props.pathURL}${page.page_no - 1}`}/>
        }
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
                },
                SelectText: {
                  component: SelectText,
                  props: {
                    onSelectText: this.onSelectText,
                    selectedText: this.state.selectText
                  }
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
        </div>
        {page.page_no !== this.props.totalPages ?
          <Next path={`${this.props.pathURL}${page.page_no + 1}`}/> :
          <Next path={`${this.props.pathURL}test`}/>
        }
      </div>
    )
  }
}

export default PageContent