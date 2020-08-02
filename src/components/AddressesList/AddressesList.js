import React, { Component } from 'react';
import styled from 'styled-components';

import * as api from './../../api';

const StyledList = styled.ul`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-rows: 0.1fr;
  grid-template-columns: 0.5fr;
  list-style: none;
  width: 40rem;
  height: 40rem;
  background-color: rgba(187, 186, 198, 0.8);
  border-radius: 6px;
  box-shadow: 0 10px 12px 1px rgba(0, 0, 0, 0.6);
  padding: 4rem;
  z-index: 100;
`;

const StyledItem = styled.li``;

class AddressesList extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    console.log('adresses mounted');
    this.setState({
      projects: [{ address: 'listitem1' }, { address: 'listitem2' }],
    });
    // api
    //   .getCalculations()
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({
    //       projects: data.results,
    //     });
    //   })
    //   .catch((err) => console.log(err, ' ERROR'));
  }
  render() {
    const { projects } = this.state;
    return (
      <StyledList>
        {projects.map((project) => (
          <li>{project.address}</li>
        ))}
      </StyledList>
    );
  }
}

export { AddressesList };
