import styled from 'styled-components';
import user from '../../images/userIcon.png';

export const StyledLoginForm = styled.div`
  display: inline-block;
  width: 100vw;

  form {
    width: 600px;
    height: 500px;
    margin: 100px auto;
    padding: 50px;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    position: relative;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 30px;
    font-family: 'REM';
    margin: 0 auto 60px;
    display: block;
    width: 107px;
  }

  h2::after {
    content: '';
    width: 25px;
    height: 13px;
    position: absolute;
    top: 90px;
    left: 45%;
    background-size: 25px 13px;
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
    display: inline-block;
    animation: flipInYVisible 1500ms ease both;
    background-image: url(${user});
  }

  h2 span {
    color: #fff500;
  }

  /* img {
    width: 25px;
    height: 13px;
    position: absolute;
    top: 90px;
    left: 45%;
    animation: flipInYVisible 1500ms ease both;
  } */

  label {
    width: 313px;
    height: 25px;
    margin: 0 120px 13px auto;
    display: block;
  }

  label.password {
    width: 344px;
    margin: 0 120px 30px auto;
  }

  span {
    margin: 2px 20px 0 0;
  }

  input {
    width: 250px;
    padding: 3px 10px;
    border: 1px solid #bbbbbb;
    font-size: 13px;
    outline: none;
    color: #737373;
    border-radius: 5px;
  }

  input:valid {
    color: black;
  }

  button {
    margin: 0 auto;
    display: block;
    width: 160px;
    padding: 11px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.1em;
    background-color: #fff500;
    transition: box-shadow 250ms ease;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  p {
    text-align: center;
    font-size: 14px;
    margin-bottom: 20px;
  }

  button.link {
    display: inline;
    background-color: transparent;
    margin: 0;
    padding: 0 !important;
    color: black;
    padding: 3px;
    font-weight: bolder;
    font-size: 14px;
    font-family: sans-serif;
    width: 55px;
    border-radius: 0;
    letter-spacing: 0;
  }

  button.link:hover {
    box-shadow: none;
  }
`;
