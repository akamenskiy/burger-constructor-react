import React from 'react';
import styled from 'styled-components';
import { BurgerIngredient } from '@/components/Burger/BurgerIngredient';

const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 250px;
  font-size: 1.2rem;
  font-weight: bold;
  overflow: scroll;
  text-align: center;
  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

const Burger = props => {
  const { ingredients } = props;
  let renderIngredients = Object.keys(ingredients)
    .map(ingName =>
      [...Array(ingredients[ingName])].map((_, i) => (
        <BurgerIngredient key={ingName + i} type={ingName} />
      ))
    )
    .reduce((acc, item) => acc.concat(item), []);
  if (renderIngredients.length === 0) {
    renderIngredients = <p>Please, start adding ingredients</p>;
  }
  return (
    <Container>
      <BurgerIngredient type="bread-top" />
      {renderIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Container>
  );
};

export default Burger;
