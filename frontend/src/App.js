import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import axios from 'axios'


// import Alphabet from './components/japanese/Alphabet'
// import Sidebar from './components/classroom/sidebar/Sidebar'
// import Test from './components/japanese/Test'
// import Chunk from './components/Chunk'
import SubjectsLanding from './components/subjects/SubjectsLanding'
import SubjectModules from './components/subjects/SubjectModules'
import Classroom from './components/classroom/Classroom'



class App extends React.Component {
  
  state = {
    module: {

    }
  }

  // async componentDidMount() {
  //   try {
  //     const res = await axios.get('/api/modules/1')
  //     this.setState({ module: res.data })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    // console.log(this.state.module)
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/:data_name/:module_name/" component={Classroom}/>
        <Route path="/:data_name/" component={SubjectModules}/>
        <Route path="/" component={SubjectsLanding}/>
        {/* <main className="page_container">
          <Sidebar module={this.state.module}/>
          <section className="alphabet_container">
          <Switch>
              <Route path="/jp/jp_1/:chapter_id/:page_id" component={Chunk}/>
              <Route path="/jp/jp_1/alpha/test" component={Test}/>
              <Route path="/jp/jp_1/alpha" component={Alphabet}/>
          </Switch>
          </section>
        </main> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
