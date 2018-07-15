import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }),
    addToOrder: PropTypes.func.isRequired
  }

  render() {
    const { image, name, price, desc, status } = this.props.details
    const { addToOrder, index } = this.props
    return (
      <li className="menu-fish">
        <img src={image} alt={`Tasty ${name}`} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        {status === 'available' ? (
          <button
            onClick={() => {
              addToOrder(index)
            }}
          >
            Add To Order
          </button>
        ) : (
          <button disabled>Sold Out!</button>
        )}
      </li>
    )
  }
}

export default Fish
