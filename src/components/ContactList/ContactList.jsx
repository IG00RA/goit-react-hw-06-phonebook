import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledItem, StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectFiltredContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filtredContacts = useSelector(selectFiltredContacts);
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
