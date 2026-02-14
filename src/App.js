import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';
import Result from './components/Result.js';
import Review from './components/Review.js';
import { QUESTIONS } from './components/QUESTIONS.js';
import LandingPage from './components/landing_page.jsx'

//const questions = QUESTIONS.map((q) => ({ ...q, question: q.Question }));
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [mode, setMode] = useState('landing'); // 'landing', 'quiz', 'result', 'review'
  const [activeOption, setActiveOption] = useState("0-40");
  const [score, setScore] = useState(0);

  // function to get initial index and last index from activeOption
  const getQuestionRange = (option) => {
    const [start, end] = option.split('-').map(num => parseInt(num, 10));
    return { startIndex: start, endIndex: end };
  };

  const { startIndex, endIndex } = getQuestionRange(activeOption);

  // Filter questions based on selected range
  const questions = QUESTIONS.slice(startIndex, endIndex).map((q) => ({ ...q, question: q.question || q.Question }));

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

   const goToQuiz = () => {
    setMode('quiz');
    //setCurrentQuestion(0); // Reset to first question when starting quiz
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

  const goToLanding = () => {
    setMode('landing');
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
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
          onBackToLanding={goToLanding}
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

     case 'landing':
    default:
  return (
    <>
        <LandingPage activeOption={activeOption}
         setActiveOption={setActiveOption} 
         onStarted={goToQuiz}     />
        
       
    </>
  );
  }
}

export default App;
