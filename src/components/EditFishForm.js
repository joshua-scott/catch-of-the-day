import React from 'react'
import PropTypes from 'prop-types'

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      details: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })
    }),
    index: PropTypes.string.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired
  }

  handleChange = e => {
    // Take a copy of the current fish
    // And then overwrite the property that's being updated
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    }
    this.props.updateFish(updatedFish, this.props.index)
  }

  render() {
    const { fish } = this.props
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={fish.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={fish.price}
          onChange={this.handleChange}
        />
        <select
          type="text"
          name="status"
          value={fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" value={fish.desc} onChange={this.handleChange} />
        <input
          type="text"
          name="image"
          value={fish.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    )
  }
}

export default EditFishForm
