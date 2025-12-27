import React from 'react';

const Quiz = ({ questions, currentQuestion, answers, onAnswer, onNext, onPrevious }) => {
  const currentQ = questions[currentQuestion];
  
  return (
    <div className="quiz-app">
      <header className="quiz-header">
        <h1>React Quiz App</h1>
        <div className="progress">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </header>

      <div className="question-container">
        <h2 className="question-text">{currentQ.question}</h2>
        
        <div className="options-container">
          {currentQ.options.map(option => (
            <div 
              key={option.id}
              className={`option ${answers[currentQ.id] === option.id ? 'selected' : ''}`}
              onClick={() => onAnswer(currentQ.id, option.id)}
            >
              <span className="option-id">{option.id})</span>
              <span className="option-text">{option.text}</span>
            </div>
          ))}
        </div>

        {answers[currentQ.id] && (
          <div className="selection-info">
            You selected: <strong>{answers[currentQ.id].toUpperCase()}</strong>
          </div>
        )}
      </div>

      <div className="navigation-buttons">
        <button 
          onClick={onPrevious}
          disabled={currentQuestion === 0}
          className="btn-secondary"
        >
          ← Previous
        </button>
        
        <button 
          onClick={onNext}
          className="btn-primary"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next →'}
        </button>
      </div>
    </div>
  );
};

export default Quiz
