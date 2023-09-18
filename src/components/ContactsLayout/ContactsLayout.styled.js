import styled from 'styled-components';
import vibration from '../../images/vibration.png';

export const StyledContactsLayout = styled.div`
  width: 100vw;
  height: 100%;
  padding: 20px 0;

  div.cover {
    max-width: 80%;
    min-width: 870px;
    height: 80%;
    padding: 50px;
    background-color: #fff;
    border-radius: 30px;
    margin: 0 auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  div.wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  h1 {
    display: inline-block;
    margin-bottom: 20px;
    margin-right: 76.5px;
  }

  h1::before {
    content: '.';
    width: 42px;
    height: 42px;
    opacity: 0;
    display: inline-block;
    position: absolute;
    z-index: 1;
    top: 9px;
    left: 13px;
    background-image: url(${vibration});
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
    animation: tada 1250ms ease-in-out 1500ms;
  }

  img {
    position: relative;
    width: 50px;
    display: inline;
    margin: 0 0 20px 16px;
    animation: tada 1250ms ease-in-out 1700ms;
    z-index: 2;
  }
`;
