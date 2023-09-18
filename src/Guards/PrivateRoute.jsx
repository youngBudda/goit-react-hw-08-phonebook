import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
