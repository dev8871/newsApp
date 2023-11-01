import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App=()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(10);
  
 
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#3377ff'
        progress={progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={15} country='in' category='general' />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={15} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={15} country='in' category='entertainment' />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={15} country='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={15} country='in' category='science' />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={15} country='in' category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={15} country='in' category='technology' />} />
          </Routes>


        </Router>
      </div>
    )
  
}
export default App;

// apikey =1b14525b930840ecb64c7d6e7d7a3893


