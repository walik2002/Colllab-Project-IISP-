import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
    <section>
      <h2>Results</h2>
      <p>Overall satisfaction: {results.overallSatisfaction}</p>
      <p>Likelihood to recommend: {results.likelihoodToRecommend}</p>
    </section>
  );
  
  Results.propTypes = {
    results: PropTypes.shape({
      overallSatisfaction: PropTypes.number.isRequired,
      likelihoodToRecommend: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  export default Results;