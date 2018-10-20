import React, { Component, Fragment } from 'react';
import { Burger } from '@/components/Burger';
import { BuildControls } from '@/components/Burger/BuildContols/BuildControls';

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  handelAddIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };
  render() {
    const { ingredients } = this.state;
    return (
      <Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls handelAddIngredient={this.handelAddIngredient} />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
