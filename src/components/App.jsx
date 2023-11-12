import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </>
    );
  }
}
