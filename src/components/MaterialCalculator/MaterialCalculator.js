import React, { Component } from 'react';
import styled from 'styled-components';

import { OscarInput } from './../OscarInput';
import { OscarSelect } from './../OscarSelect';
import { OscarButton } from './../OscarButton';

import * as api from './../../api';
import data from './../../data';

const CalculatorForm = styled.form`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-rows: 4rem;
  grid-template-columns: 1fr;
  align-items: center;
  grid-row-gap: 1rem;
  width: 40rem;
  height: 40rem;
  background-color: rgba(187, 186, 198, 0.8);
  border-radius: 6px;
  box-shadow: 0 10px 12px 1px rgba(0, 0, 0, 0.6);
  padding: 4rem;
  z-index: 100;
`;

const FormHeading = styled.h3`
  color: rgb(0, 0, 0);
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  font-size: 30px;
  text-align: center;
`;

const FieldList = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-rows: 0.1fr;
  grid-template-columns: 0.5fr;
  grid-row-gap: 1rem;
  overflow: auto;
  width: 40rem;
  height: 30rem;
  z-index: 100;
`;

class MaterialCalculator extends Component {
  constructor() {
    super();

    this.state = {
      fields: {},
    };

    this.saveField = this.saveField.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  saveField(e) {
    const newFields = Object.assign({}, this.state.fields, {
      [e.target.id]: e.target.value,
    });

    this.setState({
      fields: newFields,
    });
  }

  sendForm(e) {
    e.preventDefault();

    if (data.fields.length != Object.keys(this.state.fields).length) {
      alert('Заполните все поля!');
      return;
    }

    api
      .sendCalculation(this.state.fields)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    this.setState({ fields: {} });
  }

  render() {
    const { fields } = this.state;
    const { saveField, sendForm } = this;
    return (
      <CalculatorForm>
        <FormHeading>Заполните форму</FormHeading>
        <FieldList>
          {data.fields.map(({ type, id, options, placeholder }) =>
            type === 'select' ? (
              <OscarSelect options={options} key={id} id={id} onFieldChange={saveField} value={fields[id]} />
            ) : (
              <OscarInput
                placeholder={placeholder}
                value={fields[id] || ''}
                key={id}
                id={id}
                onFieldChange={saveField}
              />
            )
          )}
        </FieldList>
        <OscarButton text={'Отправить'} onSendForm={sendForm} />
      </CalculatorForm>
    );
  }
}

export { MaterialCalculator };
