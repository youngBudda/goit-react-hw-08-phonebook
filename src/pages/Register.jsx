import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/user/userThunks';
import { toast } from 'react-toastify';
import { selectError } from 'redux/selectors';
import { useEffect } from 'react';

const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      error.name === 'MongoError'
        ? toast.info('This account already exists')
        : toast.info('Wrong login data');
    }
  }, [error]);

  const onRegister = newUserData => {
    dispatch(registerThunk(newUserData));
  };

  return (
    <main>
      <RegistrationForm onRegister={onRegister} />
    </main>
  );
};

export default Register;
