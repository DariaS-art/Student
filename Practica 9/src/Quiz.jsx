import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  { question: '1. Что такое React?', options: ['Библиотека для создания пользовательских интерфейсов', 'Язык программирования', 'Фреймворк для серверной разработки'], answer: 0 },
  { question: '2. Какой хук используется для управления состоянием?', options: ['useState', 'useEffect', 'useContext'], answer: 0 },
  { question: '3. Какой метод используется для рендеринга компонента в DOM?', options: ['render', 'ReactDOM.render', 'React.render'], answer: 1 },
  { question: '4. Какой хук используется для побочных эффектов?', options: ['useState', 'useEffect', 'useReducer'], answer: 1 },
  { question: '5. Как передать данные от родительского компонента к дочернему?', options: ['С помощью props', 'С помощью state', 'С помощью context'], answer: 0 },
  { question: '6. Какой метод жизненного цикла вызывается после обновления компонента?', options: ['componentDidMount', 'componentDidUpdate', 'componentWillUnmount'], answer: 1 },
  { question: '7. Какой хук используется для управления контекстом?', options: ['useState', 'useEffect', 'useContext'], answer: 2 },
  { question: '8. Какой метод используется для создания контекста?', options: ['createContext', 'useContext', 'initContext'], answer: 0 },
  { question: '9. Какой метод используется для обновления состояния?', options: ['setState', 'updateState', 'changeState'], answer: 0 },
  { question: '10. Какой метод используется для удаления компонента из DOM?', options: ['unmountComponentAtNode', 'removeComponent', 'deleteComponent'], answer: 0 },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div>
          <h2>Ваш результат: {score} из {questions.length}</h2>
          {score === 10 && <div className="fireworks">🎉 Ураа! Ты прошел все! 🎉</div>}
          <button onClick={resetQuiz}>Сбросить и начать сначала</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;