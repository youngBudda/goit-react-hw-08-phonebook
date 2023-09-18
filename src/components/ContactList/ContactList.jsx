import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyledContacts } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import Contact from '../Contact/Contact';

const ContactList = ({ onDeleteContact }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <StyledContacts>
      {filteredContacts.map((contact, idx) => {
        return (
          <Contact
            onDeleteContact={onDeleteContact}
            contactItemData={contact}
            key={contact.id}
            index={idx}
          />
        );
      })}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
