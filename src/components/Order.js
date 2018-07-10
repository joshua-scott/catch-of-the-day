import React from 'react'
import { formatPrice } from '../helpers'

class Order extends React.Component {
  calculateTotal = orderIds => {
    return orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key]
      const count = this.props.order[key]
      const isAvailable = fish && fish.status === 'available'
      return isAvailable ? prevTotal + count * fish.price : prevTotal
    }, 0)
  }

  renderOrder = key => {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]
    const isAvailable = fish && fish.status === 'available'

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : 'fish'} is no longer available
        </li>
      )
    }
    return (
      <li key={key}>
        <span>
          <span className="count">{count}</span> lbs {fish.name}
        </span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order)
    const total = this.calculateTotal(orderIds)
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(key => this.renderOrder(key))}
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
