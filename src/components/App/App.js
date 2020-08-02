import React, { Component } from 'react';
import styled from 'styled-components';

import { OscarLogo } from './../OscarLogo';
import { MaterialCalculator } from './../MaterialCalculator';
import { AddressesList } from './../AddressesList';
import { NavBar } from './../NavBar';

const OskarApp = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  color: rgb(28, 15, 19);
  width: 100%;
  height: 100vh;
  background-color: rgb(183, 206, 206);
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      isForm: true,
      navState: 'form',
    };

    this.onNavigationClick = this.onNavigationClick.bind(this);
  }

  onNavigationClick(e, navState) {
    this.setState(() => ({
      isForm: navState === 'form',
      navState,
    }));
  }

  render() {
    const { isForm, navState } = this.state;
    const ComponentToRender = isForm ? <MaterialCalculator /> : <AddressesList />;
    return (
      <OskarApp>
        <OscarLogo />
        <NavBar onNavigationClick={this.onNavigationClick} navState={navState} />
        {ComponentToRender}
      </OskarApp>
    );
  }
}

export { App };
