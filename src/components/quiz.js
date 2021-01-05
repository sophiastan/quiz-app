import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const questions = [
    {
      questionText: 'What is the tallest breed of dog in the world?',
      answerOptions: [
        { answerText: 'Samoyed', isCorrect: false },
        { answerText: 'Husky', isCorrect: false},
        { answerText: 'Great Dane', isCorrect: true },
        { answerText: 'Rottweiler', isCorrect: false}
      ]
    },
    {
      questionText: 'What color eyes do most humans have?',
      answerOptions: [
        { answerText: 'Blue', isCorrect: false },
        { answerText: 'Brown', isCorrect: true },
        { answerText: 'Black', isCorrect: false },
        { answerText: 'Green', isCorrect: false }
      ]
    },
    {
      questionText: 'Which bone are babies born without?',
      answerOptions: [
        { answerText: 'Teeth', isCorrect: false },
        { answerText: 'Knee Cap', isCorrect: true },
        { answerText: 'Elbow', isCorrect: false },
        { answerText: 'Skull', isCorrect: false }
      ]
    },
    {
      questionText: 'How many hearts does an octopus have?',
      answerOptions: [
        { answerText: 'One', isCorrect: false },
        { answerText: 'Seven', isCorrect: false },
        { answerText: 'Five', isCorrect: false },
        { answerText: 'Three', isCorrect: true }
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [passFail, setPassFail] = useState("failed");

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); 
    }

    if ((score) >= 3) {
      setPassFail("passed");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    else {
      setShowScore(true);
    }
  }

  return (
    <div className='app'>
      { showScore ? 
        (
          <div className='score-section'>
            <p>You scored {score} out of {questions.length}.</p>
            <p>You {passFail} the test.</p>
          </div>
        ) :
        (
          <div>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion+1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </div>
        )
      }
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Quiz;