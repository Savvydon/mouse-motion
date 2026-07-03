import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/animations.css';

import QuestionPage from './pages/QuestionPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  const [currentPage, setCurrentPage] = useState('question');

  const handleYesClick = () => {
    setCurrentPage('success');
  };

  const handleReset = () => {
    setCurrentPage('question');
  };

  return (
    <div>
      {currentPage === 'question' ? (
        <QuestionPage onYesClick={handleYesClick} />
      ) : (
        <SuccessPage onReset={handleReset} />
      )}
    </div>
  );
}

export default App;