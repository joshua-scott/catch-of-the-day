import React from 'react'
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details
    return (
      <li className="menu-fish">
        <img src={image} alt={`Tasty ${name}`} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        {status === 'available' ? (
          <button>Add To Order</button>
        ) : (
          <button disabled>Sold Out!</button>
        )}
      </li>
    )
  }
}

export default Fish
