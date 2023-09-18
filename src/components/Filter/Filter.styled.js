import styled from 'styled-components';
import filter from '../../images/filter2.png';

export const StyledFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  max-height: 28px;
  width: 310.5px;
  height: 28px;
  text-align: left;

  input {
    opacity: 1;
    width: 200px;
    height: 28px;
    padding: 2px 10px;
    border: 2px solid #fff500;
    border-radius: 15px;
    margin-right: 26px;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px; */
    font-family: 'IBM Plex Mono';
    font-size: calc(12px + 3 * (100vw - 320px) / 930);
    color: #535353;
    animation: slide-in-fwd-center 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }

  input:focus {
    /* outline: 1px solid #fff500; */
    outline: none;
  }

  button {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 0;
    background-color: transparent;
    background-image: url(${filter});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    outline: none;
    vertical-align: super;
  }

  button:hover {
    transform: scale(1.1);
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;
