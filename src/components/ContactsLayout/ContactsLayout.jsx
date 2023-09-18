import { StyledContactsLayout } from './ContactsLayout.styled';
import PropTypes from 'prop-types';

const ContactsLayout = ({ children }) => {
  return <StyledContactsLayout>{children}</StyledContactsLayout>;
};

ContactsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactsLayout;
