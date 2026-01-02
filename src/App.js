import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';
import Result from './components/Result.js';
import Review from './components/Review.js';
import { QUESTIONS } from './components/QUESTIONS.js';

const questions = QUESTIONS.map((q) => ({ ...q, question: q.Question }));
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [mode, setMode] = useState('quiz'); // 'quiz', 'result', 'review'
  const [score, setScore] = useState(0);

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateScore();
      setMode('result');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setMode('quiz');
    setScore(0);
  };

  const goToReview = () => {
    setMode('review');
  };

  // Render based on mode
  switch (mode) {
    case 'result':
      return (
        <Result 
          score={score} 
          totalQuestions={questions.length} 
          onRetry={resetQuiz}
          onReview={goToReview}
        />
      );
    
    case 'review':
      return (
        <Review 
          questions={questions}
          answers={answers}
          onBackToResult={() => setMode('result')}
          onRetry={resetQuiz}
        />
      );
    
    case 'quiz':
    default:
      return (
        <Quiz
          questions={questions}
          currentQuestion={currentQuestion}
          answers={answers}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      );
  }
}

export default App;
