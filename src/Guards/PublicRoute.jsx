import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const token = useSelector(selectToken);
  return token ? <Navigate to="/contacts" /> : children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
