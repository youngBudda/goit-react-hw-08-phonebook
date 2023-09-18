import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/user/userThunks';
import { toast } from 'react-toastify';
import { selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      error.name === 'MongoError'
        ? toast.info('This account already exists')
        : toast.info('Wrong login data');
    }
  }, [error]);

  const onLogin = userData => {
    dispatch(loginThunk(userData));
  };

  return (
    <main>
      <LoginForm onLogin={onLogin} />
    </main>
  );
};

export default Login;
