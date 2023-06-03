import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledItem, StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <StyledList>
      {filtredContacts.map(contact => (
        <StyledItem key={contact.id}>
          <ContactItem contact={contact} />
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </StyledItem>
      ))}
    </StyledList>
  );
};
