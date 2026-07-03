// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/animations.css';

// import QuestionPage from './pages/QuestionPage';
// import SuccessPage from './pages/SuccessPage';

// function App() {
//   const [currentPage, setCurrentPage] = useState('question');

//   const handleYesClick = () => {
//     setCurrentPage('success');
//   };

//   const handleReset = () => {
//     setCurrentPage('question');
//   };

//   return (
//     <div>
//       {currentPage === 'question' ? (
//         <QuestionPage onYesClick={handleYesClick} />
//       ) : (
//         <SuccessPage onReset={handleReset} />
//       )}
//     </div>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/animations.css';

import QuestionPage from './pages/QuestionPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;