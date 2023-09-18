import { StyledAuthNavigation } from './AuthNavigation.styled';
import { Link } from 'react-router-dom';

function AuthNavigation() {
  return (
    <StyledAuthNavigation>
      <Link to="/register">registration</Link>/<Link to="/login">login</Link>
    </StyledAuthNavigation>
  );
}

export default AuthNavigation;
