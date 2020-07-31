import React, { Component } from 'react';
import styled from 'styled-components';

import { OscarLogo } from './../OscarLogo';
import { OscarInput } from './../OscarInput';
import { OscarButton } from './../OscarButton';

const CalculatorForm = styled.form`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 40rem;
  background-color: rgb(187, 186, 198);
  border-radius: 6px;
  box-shadow: 0 10px 12px 1px rgba(0, 0, 0, 0.6);
  padding: 4rem;
`;

const FormHeading = styled.h3`
  color: rgb(226, 226, 226);
  font-size: 20px;
`;

class MaterialCalculator extends Component {
  render() {
    return (
      <CalculatorForm>
        <OscarLogo />
        <OscarInput placeholder={'Введите что нибудь'} />
        <OscarInput placeholder={'Введите что нибудь'} />
        <OscarInput placeholder={'Введите что нибудь'} />
        <OscarInput placeholder={'Введите что нибудь'} />
        <OscarInput placeholder={'Введите что нибудь'} />
        <OscarButton text={'Отправить'} />
      </CalculatorForm>
    );
  }
}

export { MaterialCalculator };
