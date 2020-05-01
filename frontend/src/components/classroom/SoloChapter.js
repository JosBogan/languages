import React from 'react'
import axios from 'axios'

class SoloChapter extends React.Component {

  state = {
    data: null
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`/api/chapters/${this.props.match.params.module_name}/${this.props.match.params.chapter_name}`)
      console.log(res.data)
      if (res.data.external_link) this.externalDataRetrieval(res.data.external_link)
    } catch (err) {
      console.log(err)
    }
  }

  externalDataRetrieval = async (url) => {
    console.log(url)
    try {
      const res = await axios.get(`/api/${url}/`)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>fdsa</div>
    )
  }
}

export default SoloChapter 