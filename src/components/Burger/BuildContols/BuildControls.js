import React from 'react';
import styled from 'styled-components';
import { BuildControl } from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: #cf8f2e;
  box-shadow: 0 2px 1px #ccc;
`;

export const BuildControls = props => (
  <Container>
    {controls.map(control => (
      <BuildControl
        key={control.type}
        label={control.label}
        handelAddIngredient={() => props.handelAddIngredient(control.type)}
        handelRemoveIngredient={() => props.handelRemoveIngredient(control.type)}
        isDisabled={props.isDisabled[control.type]}
      />
    ))}
  </Container>
);
