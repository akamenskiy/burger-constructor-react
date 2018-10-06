import React from 'react';
import styled from 'styled-components';

const Bread = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;

const Seeds1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;
  &::after,
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    border-radius: 40%;
    transform: rotate(60deg);
  }
  &::after {
    left: -170%;
    top: -260%;
    box-shadow: inset -1px 2px #c9c9c9;
  }
  &::before {
    left: 180%;
    top: -50%;
    box-shadow: inset -1px -3px #c9c9c9;
  }
`;

const Seeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`;

export const BreadTop = () => (
  <Bread>
    <Seeds1 />
    <Seeds2 />
  </Bread>
);
