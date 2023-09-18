import { StyledTitle } from './Title.styled';
import phone from '../../images/phone.png';

const Title = () => {
  return (
    <StyledTitle>
      <div>
        <img src={phone} alt="phone" />
        <h1>
          ontact<span>.</span>
        </h1>
      </div>
    </StyledTitle>
  );
};

export default Title;
