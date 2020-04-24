import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'


import Alphabet from './components/japanese/Alphabet'
import Sidebar from './components/common/Sidebar'
import Test from './components/japanese/Test' 



class App extends React.Component {
  
  state = {
    module: {

    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('api/modules/1')
      this.setState({ module: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state.module)
    return (
      <BrowserRouter>
        <main className="page_container">
          <Sidebar module={this.state.module}/>
          <section className="alphabet_container">
          <Switch>
              <Route path="/alphabet/test/" component={Test}/>
              <Route path="/alphabet" component={Alphabet}/>
          </Switch>
          </section>
        </main>
      </BrowserRouter>
    )
  }
}

export default App;
