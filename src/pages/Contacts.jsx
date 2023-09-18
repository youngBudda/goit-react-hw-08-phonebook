import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  getContactsThunk,
  deleteContactThunk,
  addContactThunk,
} from 'redux/contacts/contactsThunks';
import { logOutThunk } from 'redux/user/userThunks';
import { setFilter } from 'redux/contacts/contactsSlice';
import ContactsLayout from 'components/ContactsLayout/ContactsLayout';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import phone from '../images/phone-short.png';
import Filter from 'components/Filter/Filter';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

const Contacts = () => {
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
    //     .unwrap().catch((error)=>{toast.error(error.message); })
  }, [dispatch]);

  const onFilter = filterData => {
    dispatch(setFilter(filterData));
  };

  const onLogout = () => {
    dispatch(logOutThunk());
  };

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const onAddContact = newContact => {
    const checkedContact = items.find(
      contact => newContact.name === contact.name
    );
    if (checkedContact) {
      toast.info(`${newContact.name} is already in your contacts`);
      return;
    } else {
      dispatch(addContactThunk(newContact));
    }
  };

  return (
    <main>
      <ContactsLayout>
        <div className="cover">
          <div className="wrapper">
            <img src={phone} alt="phone logo" />
            <h1>
              Contact
              <span>.</span>
            </h1>
            <Filter onFilter={onFilter} />
            <LogoutBtn onLogout={onLogout} />
          </div>
          <Form onAddContact={onAddContact} />
          {items.length > 0 && (
            <ContactList onDeleteContact={onDeleteContact} />
          )}
        </div>
      </ContactsLayout>
    </main>
  );
};

export default Contacts;
