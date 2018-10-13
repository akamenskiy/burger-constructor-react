import React, { Component, Fragment } from 'react';
import { Burger } from '@/components/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
        <Burger />
        <div>Burger Builder</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
