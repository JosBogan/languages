import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Alphabet from './components/japanese/Alphabet'
import Sidebar from './components/common/Sidebar'
import Test from './components/japanese/Test' 



function App() {

  return (
    <BrowserRouter>
      <main className="page_container">
        <Sidebar />
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

export default App;
