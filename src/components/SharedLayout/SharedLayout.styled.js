import styled from 'styled-components';

export const StyledSharedLayout = styled.div`
  min-height: 100vh;
  color: #010101;
  background-image: radial-gradient(
    ellipse,
    rgba(77, 191, 193, 1) 0%,
    rgba(48, 94, 168, 1) 77%,
    rgba(99, 187, 93, 1) 100%
  );
  background-size: 300% 300%;
  background-repeat: no-repeat;
  background-position: center;
  animation: gradient 10s linear infinite;
  background-attachment: fixed;
`;
