import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BreadBottom } from './BottomBread';
import { BreadTop } from './BreadTop';
import { Meat } from './Meat';
import { Cheese } from './Cheese';
import { Salad } from './Salad';
import { Bacon } from './Bacon';

class BurgerIngerdient extends Component {
  render() {
    const { type } = this.props;
    let ingredient = null;
    switch (type) {
      case 'bread-bottom':
        ingredient = <BreadBottom />;
        break;
      case 'bread-top':
        ingredient = <BreadTop />;
        break;
      case 'meat':
        ingredient = <Meat />;
        break;
      case 'cheese':
        ingredient = <Cheese />;
        break;
      case 'salad':
        ingredient = <Salad />;
        break;
      case 'bacon':
        ingredient = <Bacon />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngerdient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngerdient;
