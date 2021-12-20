import logo from './logo.svg';
import React, { userState, useState } from 'react';
import './App.css';

function App() {
  const Questions = [
    {
      questionText: 'Qn1',
      answerOptions: [
        { answerText: "Text1", isTrue: true },
        { answerText: "Text2", isTrue: false },
        { answerText: "Text3", isTrue: false },
        { answerText: "Text4", isTrue: false },
      ]
    },
    {
      questionText: 'Qn2',
      answerOptions: [
        { answerText: "", isTrue: false },
        { answerText: "", isTrue: true },
        { answerText: "", isTrue: false },
        { answerText: "", isTrue: false },
      ]
    },
    {
      questionText: 'Qn3',
      answerOptions: [
        { answerText: "", isTrue: false },
        { answerText: "", isTrue: false },
        { answerText: "", isTrue: true },
        { answerText: "", isTrue: false },
      ]
    },
    {
      questionText: 'Qn4',
      answerOptions: [
        { answerText: "", isTrue: false },
        { answerText: "", isTrue: false },
        { answerText: "", isTrue: false },
        { answerText: "", isTrue: true },
      ]
    }
  ];

const [currentQuestion, setCurrentQuestion] = useState(0);

const clickHandler = ()=>{
  const nextQuestion = currentQuestion + 1;
  setCurrentQuestion(nextQuestion);
}
  return (

    <div className='app'>
      {
        false ? (
          <div className='scoreCard'>You scored 0 out of {Questions.length}</div>
        ) : (
          <>
            <div className='score-section'>
              <div className='question-number'>
                <span>Question 1</span>/{Questions.length}
              </div>
              <div clasaName="question-text">{Questions[currentQuestion].questionText}
              </div>
            </div>
            <div className='answer-section'>
              {Questions[currentQuestion].answerOptions.map((answerOptions) => <button onClick={clickHandler}>{answerOptions.answerText}</button>)}
            </div>
          </>
        )
      }
    </div>

  );
}

export default App;
