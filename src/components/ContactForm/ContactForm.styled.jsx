import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${props => props.theme.spacing(6)} 0;
`;

export const Label = styled.label`
  display: flex;
  gap: ${props => props.theme.spacing(5)};
  width: 100%;
  text-align: left;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 0.9em;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.07);
`;

export const AddButton = styled.button`
  font-size: 1em;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #59b969;
  margin: 0 auto;
  box-shadow: 0 1px 0 0 #60bd49 inset;
  background: linear-gradient(#63e651, #42753e);

  &:hover {
    color: ${props => props.theme.colors.white};
    background: linear-gradient(#51db1c, #6ba061);
  }
`;
