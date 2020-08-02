import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  background-color: rgb(226, 226, 226);
  color: black;
  width: 20rem;
  height: 2rem;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  outline: none;
  box-sizing: content-box;
  cursor: pointer;
`;

class OscarSelect extends Component {
  render() {
    const { options, onFieldChange, id, value } = this.props;
    return (
      <StyledSelect id={id} value={value || options[0]} onChange={onFieldChange}>
        {options.map((option, i) => (
          <option disabled={i === 0} selected={i === 0} key={i}>
            {option}
          </option>
        ))}
      </StyledSelect>
    );
  }
}

export { OscarSelect };
