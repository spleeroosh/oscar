import React, { Component } from 'react';
import styled from 'styled-components';

class OscarButton extends Component {
  render() {
    const { text } = this.props;
    const Button = ({ className }) => <button className={className}>{text}</button>;
    const StyledButton = styled(Button)`
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

      &:hover {
        box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.6);
        transform: translateY(-4px);
      }
    `;
    return <StyledButton></StyledButton>;
  }
}

export { OscarButton };
