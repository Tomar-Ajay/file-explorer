import React from 'react';
// import "styles/main.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Inner from './components/Inner/Inner';
import Code from './components/Code/Code';
import LockModal from './components/Modal/LockModal';


function App() {
  return (
    <div className="App">
      {/* <Code /> */}
      {/* <LockModal /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/inner" element={<Inner/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
