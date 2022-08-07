/* eslint-disable react/static-property-placement */
import React from 'react';
import Proptypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: Proptypes.shape({
      image: Proptypes.string,
      name: Proptypes.string,
      desc: Proptypes.string,
      status: Proptypes.string,
      price: Proptypes.number,
    }),
    addToOrder: Proptypes.func,
    index: Proptypes.string,
  };

  render() {
    const {
      details: { image, name, price, desc, status },
      addToOrder,
      index,
    } = this.props;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button type="submit" disabled={!isAvailable} onClick={() => addToOrder(index)}>
          {isAvailable ? 'Add To Order' : 'Sold out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
