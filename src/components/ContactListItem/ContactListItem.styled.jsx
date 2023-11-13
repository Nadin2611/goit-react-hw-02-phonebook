import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  font-size: 1em;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ff4d4d;
  box-shadow: 0 1px 0 0 #ff6666 inset;
  background: linear-gradient(#ff6666, #cc0000);

  &:hover {
    color: ${props => props.theme.colors.white};
    background: linear-gradient(#ff3333, #cc0000);
  }
`;
