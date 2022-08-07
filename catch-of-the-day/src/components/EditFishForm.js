/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: Proptypes.shape({
      image: Proptypes.string,
      name: Proptypes.string,
      desc: Proptypes.string,
      status: Proptypes.string,
      price: Proptypes.number,
    }),
    updateFish: Proptypes.func,
    deleteFish: Proptypes.func,
    index: Proptypes.string,
  };

  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
        <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
        <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
        <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
        <button type="submit" onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
