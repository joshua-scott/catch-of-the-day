import React from 'react'
import { formatPrice } from '../helpers'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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

    // Only render the fish once it's been loaded
    if (!fish) return null

    if (!isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 250, exit: 250 }}
        >
          <li key={key}>
            Sorry, {fish ? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
      )
    }
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={key}>
          <span>
            <span className="count">{count}</span> lbs {fish.name}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
          <span className="price">{formatPrice(count * fish.price)}</span>
        </li>
      </CSSTransition>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order)
    const total = this.calculateTotal(orderIds)
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(key => this.renderOrder(key))}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </TransitionGroup>
      </div>
    )
  }
}

export default Order
