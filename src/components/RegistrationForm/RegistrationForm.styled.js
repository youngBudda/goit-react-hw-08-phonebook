import styled from 'styled-components';

export const StyledRegistrationForm = styled.div`
  display: inline-block;
  width: 100vw;

  form {
    width: 600px;
    height: 500px;
    margin: 100px auto;
    padding: 50px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 30px;
    font-family: 'REM';
  }

  h2 span {
    color: #fff500;
  }

  label {
    width: 350px;
    height: 25px;
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  span {
    margin-top: 2px;
  }

  input {
    width: 100%;
    padding: 0 5px;
    border: none;
    border-bottom: 2px dotted #bbbbbb;
    font-size: 15px;
    outline: none;
    color: black;
    letter-spacing: 0.1em;
    font-family: 'IBM Plex Mono';
    background-color: white !important;
    color: gray;
  }

  input.name,
  input.email {
    padding-left: 30px;
  }

  input:valid {
    color: black;
  }

  button {
    display: inline-block;
    width: 160px;
    margin: 48px 0 68px 190px;
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
    text-align: right;
    font-size: 14px;
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
    width: 50px;
    border-radius: 0;
    letter-spacing: 0;
  }

  button.link:hover {
    box-shadow: none;
  }
`;
