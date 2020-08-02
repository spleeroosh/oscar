import React, { Component } from 'react';
import styled from 'styled-components';

import { StorageIcon } from './../../images/StorageIcon';
import { FormIcon } from './../../images/FormIcon';

const StyledNavbar = styled.ul`
  position: fixed;
  display: grid;
  z-index: 120;
  list-style: none;
  top: 50%;
  left: 10rem;
  transform: translateY(-50%);
  background-color: rgba(187, 186, 198, 0.8);
  box-shadow: 0 10px 12px 1px rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  padding: 1rem;
`;

const StyledListItem = styled.li`
  cursor: pointer;
  display: grid;
  align-items: center;
  grid-template-columns: 0.3fr 1fr;
  grid-template-rows: 0.3fr 0.3fr;
  padding: 0.5rem;
  border: ${(props) => (props.id === props.navState ? '1px solid rgb(51, 46, 60)' : '1px solid transparent')};
  border-radius: 3px;
  background-color: ${(props) => (props.id === props.navState ? 'rgba(51, 46, 60, .2)' : '1px solid transparent')};
`;

class NavBar extends Component {
  render() {
    const { onNavigationClick, navState } = this.props;
    const icons = [
      { Component: StorageIcon, id: 'storage', text: 'Список объектов' },
      { Component: FormIcon, id: 'form', text: 'Форма для расчета' },
    ];

    return (
      <StyledNavbar>
        {icons.map(({ Component, id, text }, index) => (
          <StyledListItem key={index} navState={navState} id={id} onClick={(e) => onNavigationClick(e, id)}>
            <Component />
            {text}
          </StyledListItem>
        ))}
      </StyledNavbar>
    );
  }
}

export { NavBar };
