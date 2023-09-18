import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;

  input {
    height: 28px;
    width: 272.5px;
    padding: 2px 10px;
    border: none;
    border-radius: 5px;
    margin-right: 18px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px;
    font-family: 'IBM Plex Mono';
    font-size: calc(12px + 3 * (100vw - 320px) / 930);
    color: #535353;
  }

  input.name {
    margin-right: 20px;
  }

  input:focus {
    outline: 1px solid #fff500;
  }

  input::placeholder {
    color: #797979;
  }

  button {
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    background-color: #fff500;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    transform: rotate(45deg);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 14px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 90%;
    /* transition: color 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940), transform 250ms cubic-bezier(0.250, 0.460, 0.450, 0.940); */
  }

  button:hover {
    /* color: white; */
    transform: scale(1.2) rotate(45deg);
  }
`;
