import React, { Component } from 'react';
import styled from 'styled-components';

// const Input = ({ className }) => (
//   <input className={className} placeholder={placeholder} value={value} id={id} onChange={onFieldChange}></input>
// );

const StyledInput = styled.input`
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

class OscarInput extends Component {
  render() {
    const { placeholder, onFieldChange, id, value } = this.props;

    return <StyledInput placeholder={placeholder} value={value} id={id} onChange={onFieldChange} />;
  }
}

export { OscarInput };
