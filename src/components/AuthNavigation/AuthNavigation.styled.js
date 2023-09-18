import styled from 'styled-components';

export const StyledAuthNavigation = styled.p`
  font-size: 16px;
  display: inline-block;
  position: absolute;
  right: 40%;
  font-weight: bolder;
  animation: flipInY 1000ms ease 1300ms both;

  a {
    color: black;
    font-weight: normal;
    margin: 0 7px 0 7px;
    font-weight: 600;
    transition: color 0.25s ease;
  }

  a:hover {
    color: #fff500;
  }
`;
