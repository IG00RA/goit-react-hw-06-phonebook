import { createSlice, nanoid } from '@reduxjs/toolkit';
const contactsInitialState = [
  { id: 'id-1', name: 'Poly', number: '123123' },
  { id: 'id-2', name: 'Mango', number: '123123' },
  { id: 'id-3', name: 'Kiwi', number: '123123' },
  { id: 'id-4', name: 'Apple', number: '123123' },
  { id: 'id-5', name: 'Graph', number: '123123' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactsState: contactsInitialState },

  reducers: {
    addContact(state, action) {
      state.contactsState.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      const index = state.contactsState.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsState.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
