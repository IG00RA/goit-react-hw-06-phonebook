import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px;
  padding: 10px;
  gap: 10px;

  margin: 10px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
