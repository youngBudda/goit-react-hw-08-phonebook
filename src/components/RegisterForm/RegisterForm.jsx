import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';
import { Navigate,   } from "react-router-dom";
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Form } from './styled';
import Swal from 'sweetalert2';



const RegisterForm = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            }))
            .unwrap()
            .then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Registration completed successfully !`,
                    showConfirmButton: false,
                    timer: 1000,
                });
            })
            .catch(e => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    text: `Please, try again!`,
                    showConfirmButton: false,
                    timer: 1000,
                });
            });

        form.reset();
    };

    if (auth.isLoggedIn) {
        return <Navigate to="/" replace />;
    };


    return (
        <Form
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <h2>Sigh in </h2>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                required
                sx={{ width: "100%", mb: 3 }}
            />
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                required
                sx={{ width: "100%", mb: 3 }}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required
                sx={{ width: "100%", mb: 3 }}
            />
            <Button
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
                sx={{ width: "100%", mb: 3 }}
            >Sign UP
            </Button>
        </Form>
    );
};


export default RegisterForm;