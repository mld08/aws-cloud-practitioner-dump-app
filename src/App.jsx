import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AWSExamApp from './components/AWSExamApp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AWSExamApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;