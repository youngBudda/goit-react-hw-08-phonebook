import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const AuthNav = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavLink to="login">
        <Button color="success" variant="contained" size="small">
          log in
        </Button>
      </NavLink>

      <NavLink to="register">
        <Button color="success" variant="outlined" size="small" sx={{ ml: 1 }}>
          Sign up
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
