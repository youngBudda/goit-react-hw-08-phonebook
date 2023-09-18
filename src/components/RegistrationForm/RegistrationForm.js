import { StyledRegistrationForm } from './RegistrationForm.styled';
import PropTypes from 'prop-types';
import { setError } from 'redux/rootSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ onRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerClick = () => {
    dispatch(setError());
    navigate('/login');
  };

  const handlerSubmit = evt => {
    evt.preventDefault();
    const newUser = {
      name: evt.currentTarget.name.value,
      email: evt.currentTarget.email.value,
      password: evt.currentTarget.password.value,
    };
    onRegister(newUser);
    evt.currentTarget.reset();
  };

  return (
    <StyledRegistrationForm>
      <form onSubmit={handlerSubmit}>
        <h2>
          Registration<span>.</span>
        </h2>
        <label>
          <span>Name </span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            autoFocus
            minLength="2"
            className="name"
            required
          />
        </label>
        <label>
          <span>Email </span>
          <input type="email" name="email" className="email" required />
        </label>
        <label>
          <span>Password </span>
          <input
            type="password"
            name="password"
            minLength="6"
            maxLength="12"
            required
          />
        </label>
        <button type="Submit">SIGN UP</button>
        <p>
          {/* Already have an account? <Link to="/login"> Sign in</Link> */}
          Already have an account?{' '}
          <button type="button" className="link" onClick={handlerClick}>
            Sign in
          </button>
        </p>
      </form>
    </StyledRegistrationForm>
  );
};

RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegistrationForm;
