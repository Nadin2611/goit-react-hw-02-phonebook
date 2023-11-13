import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(5)};

  text-align: left;
`;

export const FilterInput = styled.input`
  width: 350px;
  padding: 10px;
  font-size: 0.9em;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.07);
`;
