import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts.`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: data.name, number: data.number },
        ],
      }));
    }
  };

  filterHandleChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  onDeleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.filterHandleChange}
        ></Filter>
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDeleteContact}
        ></ContactList>
      </Container>
    );
  }
}
