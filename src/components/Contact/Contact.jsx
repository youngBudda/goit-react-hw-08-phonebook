import PropTypes from 'prop-types';
import { StyledContact } from './Contact.styled';
import { useSpring, animated } from 'react-spring';

const Contact = ({ contactItemData, index, onDeleteContact }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: 'perspective(400px) rotateX(90deg)' },
    to: { opacity: 1, transform: 'perspective(400px) rotateX(0deg)' },
    config: { duration: 100, mass: 1, tension: 280, friction: 20 },
    delay: index * 50,
  });

  return (
    <animated.div style={spring}>
      <StyledContact>
        <a href={`tel:+${contactItemData.number}`}>
          <p>
            <span>●</span>
            {contactItemData.name}: {contactItemData.number}
          </p>
        </a>
        <button
          type="button"
          onClick={() => onDeleteContact(contactItemData.id)}
        >
          ✕
        </button>
      </StyledContact>
    </animated.div>
  );
};

Contact.propTypes = {
  contactItemData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
