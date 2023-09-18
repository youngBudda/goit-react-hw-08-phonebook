import styled from 'styled-components';

export const StyledLogoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 60px;
  border-radius: 15px;
  border: 2px solid #fff500;
  background-color: white;
  margin-left: auto;
  font-size: 17px;
  padding: 12px;
  overflow: hidden;
  transition: letter-spacing 0.25s ease;

  &:hover {
    letter-spacing: 0.1em;
  }

  span {
    display: inline-block;
    margin-left: 30px;
    transform: scaleX(1.8) scaleY(1.2);
    display: inline-block;
    font-size: 25px;
    font-weight: bold;
    color: #fff500;
    transition: margin-left 0.25s ease;
  }

  &:hover span {
    margin-left: 22px;
  }
`;
