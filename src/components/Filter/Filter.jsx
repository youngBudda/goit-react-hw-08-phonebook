import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';
import { useState } from 'react';
import { selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

function Filter({ onFilter }) {
  const filter = useSelector(selectFilter);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  const handleInputChange = event => {
    onFilter(event.target.value);
  };

  return (
    <StyledFilter>
      {isVisible && (
        <input onChange={handleInputChange} value={filter} type="text" />
      )}
      <button type="button" onClick={handleClick}>
        <span>Filter</span>
      </button>
    </StyledFilter>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
