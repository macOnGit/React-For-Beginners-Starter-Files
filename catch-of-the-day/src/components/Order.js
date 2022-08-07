/* eslint-disable react/static-property-placement */
import React from 'react';
import Proptypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  static propTypes = {
    fishes: Proptypes.object,
    order: Proptypes.object,
    removeFromOrder: Proptypes.func,
  };

  renderOrder = (key) => {
    const { fishes, order, removeFromOrder } = this.props;
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status === 'available';
    const transitionsOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionsOptions}>
          <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>;
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionsOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button type="submit" onClick={() => removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const { fishes, order } = this.props;
    const orderIds = Object.keys(order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = fishes[key];
      const count = order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order!</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
