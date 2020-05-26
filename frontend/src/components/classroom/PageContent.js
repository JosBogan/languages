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
    textTest2: '<div class="content_inner_container">Today we are going to be learning about **verb conjugations**. There is no future tense in Japanese (we will learn how to express the future later) so for now we are just going to be focussing on the dictionary form, past and present in possitive and negative↵↵There are two groups of verb in Japanese, <span class="blue_text">**~る**</span> and <span class="blue_text">**~う**</span> verbs. They are called as such because the **dictionary form** of each verb end in one of the other. So lets see the conjugation:↵↵<div class="normal_table">|　 | Positive | Negitive |↵| --- | --- | --- |↵| **Present** | <span class="blue_text">~ます</span> | <span class="blue_text">~ません</span> |↵| **Past** | <span class="blue_text">~ました</span> | <span class="blue_text">~ませんでした</span> |</div>↵↵Above are the endings for for each verb tense. For <span class="blue_text">~る</span> verbs it\'s easy, just take off the <span class="blue_text">~る</span> and replace it with the ending.↵↵<div class="normal_table">|　 | Positive | Negitive |↵| --- | --- | --- |↵| **Present** | たべ<span class="blue_text">ます</span> | たべ<span class="blue_text">ません</span> |↵| **Past** | たべ<span class="blue_text">ました</span> | たべ<span class="blue_text">ませんでした</span> |</div>↵↵For <span class="blue_text">~う</span> verbs, all of which end in some form of **u** vowel, you convert the <span class="blue_text">う</span> sound to <span class="blue_text">い</span>. So <span class="blue_text">く</span> becomes <span class="blue_text">~き</span>, <span class="blue_text">む</span> becomes <span class="blue_text">~み</span> and then you add the endings↵↵<div class="normal_table">|　 | Positive | Negitive |↵| --- | --- | --- |↵| **Present** | の<span class="blue_text">みます</span> | の<span class="blue_text">みません</span> |↵| **Past** | の<span class="blue_text">みました</span> | の<span class="blue_text">みませんでした</span> |</div></div>',
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