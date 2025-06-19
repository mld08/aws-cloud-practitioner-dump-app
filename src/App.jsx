import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AWSExamApp from './components/AWSExamApp';
import AnalyticsPage from './components/AnalyticsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AWSExamApp />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;