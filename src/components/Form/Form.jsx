import { StyledForm } from './Form.styled';
import PropTypes from 'prop-types';

const Form = ({ onAddContact }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name: evt.currentTarget.name.value,
      number: evt.currentTarget.number.value,
    };
    onAddContact(newContact);
    evt.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        className="name"
        type="text"
        name="name"
        placeholder="new contact name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        placeholder="number"
        name="number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">
        <span>✕</span>
      </button>
    </StyledForm>
  );
};

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default Form;
