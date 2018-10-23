import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  width: 80px;
  padding: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  margin-right: 5px;
  margin-left: 5px;
  display: block;
  padding: 5px;
  width: 80px;
  border: 1px solid #aa6817;
  color: white;
  cursor: pointer;
  font: inherit;
  outline: none;
  &:disabled {
    border: 1px solid #7e7365;
    background-color: #ac9980;
    color: #ccc;
    cursor: default;
    &:hover {
      background-color: #ac9980;
      color: #ccc;
      cursor: not-allowed;
    }
  }
`;

const Less = styled(Button)`
  background-color: #d39952;
  &:hover,
  &:active {
    background-color: #daa972;
  }
`;

const More = styled(Button)`
  background-color: #8f5e1e;
  &:hover,
  &:active {
    background-color: #99703f;
  }
`;

export const BuildControl = props => {
  const { label, handelRemoveIngredient, handelAddIngredient, isDisabled } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <Less onClick={handelRemoveIngredient} disabled={isDisabled}>
        Less
      </Less>
      <More onClick={handelAddIngredient}>More</More>
    </Container>
  );
};
