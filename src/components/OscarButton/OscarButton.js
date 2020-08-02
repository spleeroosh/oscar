import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 20rem;
  height: 2rem;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  box-sizing: content-box;
  cursor: pointer;
  outline: none;
  transition: all 0.4s;
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.6);
    transform: translateY(-4px);
  }
`;

class OscarButton extends Component {
  render() {
    const { text, onSendForm } = this.props;

    return <StyledButton onClick={onSendForm}>{text}</StyledButton>;
  }
}

export { OscarButton };
