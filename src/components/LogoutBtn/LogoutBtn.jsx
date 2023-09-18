import { StyledLogoutBtn } from './LogoutBtn.styled';
import PropTypes from 'prop-types';

const LogoutBtn = ({ onLogout }) => {
  return (
    <StyledLogoutBtn type="button" onClick={() => onLogout()}>
      Logout<span className="right">→</span>
    </StyledLogoutBtn>
  );
};

LogoutBtn.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default LogoutBtn;
