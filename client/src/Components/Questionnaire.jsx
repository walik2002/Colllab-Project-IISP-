import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Questionnaire = ({ onSubmit }) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <section>
      <h2>Questionnaire</h2>
      <ol>
        <li>
          <p>How satisfied are you with your overall experience?</p>
          <Button label="Very satisfied" onClick={() => handleAnswer(5)} />
          <Button label="Satisfied" onClick={() => handleAnswer(4)} />
          <Button label="Neutral" onClick={() => handleAnswer(3)} />
          <Button label="Dissatisfied" onClick={() => handleAnswer(2)} />
          <Button label="Very dissatisfied" onClick={() => handleAnswer(1)} />
        </li>
        <li>
          <p>How likely are you to recommend us to a friend?</p>
          <Button label="Very likely" onClick={() => handleAnswer(5)} />
          <Button label="Likely" onClick={() => handleAnswer(4)} />
          <Button label="Neutral" onClick={() => handleAnswer(3)} />
          <Button label="Unlikely" onClick={() => handleAnswer(2)} />
          <Button label="Very unlikely" onClick={() => handleAnswer(1)} />
        </li>
      </ol>
      <Button label="Submit" onClick={handleSubmit} />
    </section>
  );
};

Questionnaire.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Questionnaire;