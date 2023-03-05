import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Button = ({
    label,
    onClick,
    disabled,
    loading,
    type,
    className,
  }) => (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <FontAwesomeIcon icon={faCircleNotch} spin />
      ) : (
        label
      )}
    </button>
  );
  
  Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
  };
  
  Button.defaultProps = {
    disabled: false,
    loading: false,
    type: 'button',
    className: '',
  };
  
  export default Button;