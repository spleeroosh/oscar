import React, { Component } from 'react';
import styled from 'styled-components';

class OscarInput extends Component {
  render() {
    const { placeholder } = this.props;
    console.log(placeholder);

    const Input = ({ className }) => (
      <input className={className} placeholder={placeholder} onChange={(e) => console.log(e.target.value)}></input>
    );

    const StyledInput = styled(Input)`
      background-color: rgb(226, 226, 226);
      color: black;
      width: 20rem;
      height: 2rem;
      border: none;
      border-radius: 3px;
      padding: 0.5rem 1rem;
      font-size: 16px;
      outline: none;
    `;

    return <StyledInput></StyledInput>;
  }
}

export { OscarInput };
