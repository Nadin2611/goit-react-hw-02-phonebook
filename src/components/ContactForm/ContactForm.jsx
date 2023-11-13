import { Component } from 'react';

import {
  Form,
  FormContainer,
  Label,
  Input,
  AddButton,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormContainer>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              placeholder="John Smith"
            ></Input>
          </Label>
        </FormContainer>

        <FormContainer>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              required
              placeholder="050 000 00 00"
            ></Input>
          </Label>
        </FormContainer>

        <AddButton type="submit">Add Contact</AddButton>
      </Form>
    );
  }
}
