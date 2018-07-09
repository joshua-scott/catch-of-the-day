import React from 'react'
import OrderItem from './OrderItem'
import { formatPrice } from '../helpers'

class Order extends React.Component {
  render() {
    const { order, fishes } = this.props
    const orderIds = Object.keys(order)
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = fishes[key]
      const count = order[key]
      return prevTotal + fish.price * count
    }, 0)
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {Object.keys(order).map(key => (
            <OrderItem
              key={key}
              fishName={fishes[key].name}
              fishPrice={fishes[key].price}
              weightInPounds={order[key]}
            />
          ))}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order
