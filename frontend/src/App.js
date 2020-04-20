import React from 'react';
import './App.css';
import Alphabet from './components/japanese/Alphabet'
import Sidebar from './components/common/Sidebar'


function App() {

return (
  <main className="page_container">
    <Sidebar />
    <Alphabet />
  </main>
)
}

export default App;
