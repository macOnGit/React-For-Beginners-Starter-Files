/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  static propTypes = {
    updateFish: Proptypes.func,
    deleteFish: Proptypes.func,
    fishes: Proptypes.object,
    addFish: Proptypes.func,
    loadSampleFishes: Proptypes.func,
  };

  render() {
    const { addFish, loadSampleFishes } = this.props;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            key={key}
            index={key}
            fish={this.props.fishes[key]}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button type="submit" onClick={loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
