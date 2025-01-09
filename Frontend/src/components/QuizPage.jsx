import React, { useState, useEffect } from 'react';
import styles from '../styles/QuizPage.module.css';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch('/api/quiz')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleSubmit = () => {
    // Submit logic
    setScore(10); // Placeholder score
  };

  return (
    <div className={styles.container}>
      <h1>Quiz</h1>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((o) => (
            <button key={o}>{o}</button>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score && <p>Your Score: {score}</p>}
    </div>
  );
};

export default QuizPage;
