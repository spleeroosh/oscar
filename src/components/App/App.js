import React, { Component } from 'react';
import styled from 'styled-components';

import { MaterialCalculator } from './../MaterialCalculator';

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
    };
  }
  render() {
    const { isForm } = this.state;
    return (
      <OskarApp>
        <MaterialCalculator></MaterialCalculator>
      </OskarApp>
    );
  }
}

export { App };
