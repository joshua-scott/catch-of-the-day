import React from 'react'
import { formatPrice } from '../helpers'

class OrderItem extends React.Component {
  render() {
    const { fishName, fishPrice, weightInPounds } = this.props
    return (
      <li>
        <span>
          <span className="count">{weightInPounds}</span> lbs {fishName}
          <button>×</button>
        </span>
        <span className="price">{formatPrice(fishPrice * weightInPounds)}</span>
      </li>
    )
  }
}

export default OrderItem
