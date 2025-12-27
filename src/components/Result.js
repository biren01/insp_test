import React from 'react';

const Result = ({ score, totalQuestions, onRetry, onReview }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage === 100) return "Perfect! 🎉";
    if (percentage >= 80) return "Excellent! 😊";
    if (percentage >= 60) return "Good job! 👍";
    return "Keep practicing! 💪";
  };

  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      
      <div className="score-circle">
        <div className="score-inner">
          <span className="score-percentage">{percentage}%</span>
          <span className="score-text">{score}/{totalQuestions}</span>
        </div>
      </div>

      <p className="result-message">{getMessage()}</p>

      <div className="result-actions">
        <button onClick={onRetry} className="btn-primary">
          Try Again
        </button>
        <button onClick={onReview} className="btn-secondary">
          Review Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;
