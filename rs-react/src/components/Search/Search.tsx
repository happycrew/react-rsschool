import React, { ChangeEvent, Component } from 'react';
import './Search.scss';

export class Search extends Component {
  state = {
    term: localStorage.getItem('value') || '',
  };

  componentDidMount(): void {
    const term = localStorage.getItem('value');
    this.setState({ term });
  }

  componentWillUnmount(): void {
    localStorage.setItem('value', this.state.term);
  }

  onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const term = ev.target.value;
    localStorage.setItem('value', term);
    this.setState({ term });
  };

  render() {
    return (
      <div className="search">
        <div className="search__wrapper">
          <input
            type="text"
            name="text"
            className="search__input"
            placeholder="What are u looking for?"
            value={this.state.term}
            onChange={this.onSearchChange}
          />
        </div>
      </div>
    );
  }
}
