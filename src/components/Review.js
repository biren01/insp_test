import React from 'react';

const Review = ({ questions, answers, onBackToResult, onRetry }) => {
  const getOptionClass = (question, optionId) => {
    const userAnswer = answers[question.id];
    const isCorrect = optionId === question.correctAnswer;
    const isSelected = optionId === userAnswer;
    
    if (isCorrect) {
      return 'correct-option';
    } else if (isSelected && !isCorrect) {
      return 'incorrect-option';
    }
    return '';
  };

  const isAnswerCorrect = (question) => {
    return answers[question.id] === question.correctAnswer;
  };

  return (
    <div className="review-container">
      <header className="review-header">
        <h1>Quiz Review</h1>
        <p>Review your answers and learn from mistakes</p>
      </header>

      <div className="questions-review">
        {questions.map((question, index) => (
          <div key={question.id} className="review-question">
            <div className="review-question-header">
              <h3>Question {index + 1}</h3>
              <span className={`status-badge ${isAnswerCorrect(question) ? 'correct' : 'incorrect'}`}>
                {isAnswerCorrect(question) ? '✓ Correct' : '✗ Incorrect'}
              </span>
            </div>
            
            <p className="question-text">{question.question}</p>
            
            <div className="review-options">
              {question.options.map(option => (
                <div 
                  key={option.id}
                  className={`review-option ${getOptionClass(question, option.id)}`}
                >
                  <span className="option-id">{option.id})</span>
                  <span className="option-text">{option.text}</span>
                  
                  {option.id === question.correctAnswer && (
                    <span className="correct-indicator">✓ Correct Answer</span>
                  )}
                  
                  {option.id === answers[question.id] && option.id !== question.correctAnswer && (
                    <span className="incorrect-indicator">✗ Your Answer</span>
                  )}
                </div>
              ))}
            </div>

            {question.explanation && (
              <div className="explanation">
                <strong>Explanation:</strong> {question.explanation}
              </div>
            )}

            <div className="answer-summary">
              <div className="summary-item">
                <span>Your Answer:</span>
                <span className={`user-answer ${isAnswerCorrect(question) ? 'correct' : 'incorrect'}`}>
                  {answers[question.id] ? answers[question.id].toUpperCase() : 'Not Answered'}
                </span>
              </div>
              <div className="summary-item">
                <span>Correct Answer:</span>
                <span className="correct-answer">{question.correctAnswer.toUpperCase()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="review-actions">
        <button onClick={onBackToResult} className="btn-secondary">
          ← Back to Result
        </button>
        <button onClick={onRetry} className="btn-primary">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Review;
