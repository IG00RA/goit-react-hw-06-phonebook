// export const selectContacts = state => state.contacts.contactsState;

// export const selectFilter = state => state.filter;
export const selectFiltredContacts = state => {
  return state.contacts.contactsState.filter(contact =>
    contact.name.toLowerCase().includes(state.filter)
  );
};
