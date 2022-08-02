/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const {
      details: { image, name, price, desc, status },
    } = this.props;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
      </li>
    );
  }
}

export default Fish;
