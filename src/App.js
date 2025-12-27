import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';
import Result from './components/Result';
import Review from './components/Review';

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: [
      { id: 'a', text: "Berlin" },
      { id: 'b', text: "Madrid" },
      { id: 'c', text: "Paris" },
      { id: 'd', text: "Rome" }
    ],
    correctAnswer: 'c',
    explanation: "Paris is the capital and most populous city of France."
  },
  {
    id: 2,
    question: "Which React hook is used for state management?",
    options: [
      { id: 'a', text: "useEffect" },
      { id: 'b', text: "useState" },
      { id: 'c', text: "useContext" },
      { id: 'd', text: "useReducer" }
    ],
    correctAnswer: 'b',
    explanation: "useState is the primary hook for managing state in functional components."
  },
  {
    id: 3,
    question: "What does JSX stand for?",
    options: [
      { id: 'a', text: "JavaScript XML" },
      { id: 'b', text: "Java Syntax Extension" },
      { id: 'c', text: "JavaScript Extension" },
      { id: 'd', text: "JS XML" }
    ],
    correctAnswer: 'a',
    explanation: "JSX stands for JavaScript XML, which allows writing HTML-like code in JavaScript."
  }
];

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

