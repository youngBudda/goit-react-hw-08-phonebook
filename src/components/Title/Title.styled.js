import styled from 'styled-components';

export const StyledTitle = styled.div`
  width: 300px;
  margin: 0 auto 20px;
  text-align: center;

  h1 {
    font-family: 'REM';
    display: inline-block;
    margin-top: 320px;
    text-shadow: 1px 1px 0.5px #00000082;
    font-size: 44px;
  }
  img {
    animation-name: bounceInDown;
    animation-duration: 1500ms;
    position: absolute;
    top: 0;
    transform: translateX(-45px);
    width: 55px;
    height: 400px;
  }

  span {
    color: #fff500;
    animation: lightSpeedInRight 500ms ease 900ms both;
    position: absolute;
    text-shadow: 1px 1px 0.5px #00000082;
  }
`;
