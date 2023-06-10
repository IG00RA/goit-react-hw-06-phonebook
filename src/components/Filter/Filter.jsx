import { FormField } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getUserInput } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FormField>
      Find contact by name
      <input
        type="text"
        onChange={e => {
          dispatch(getUserInput(e.currentTarget.value.toLowerCase()));
        }}
      />
    </FormField>
  );
};
