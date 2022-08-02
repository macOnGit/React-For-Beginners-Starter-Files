/* eslint-disable react/prop-types */
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    const { history } = this.props;
    event.preventDefault();
    const storeName = this.myInput.current.value;
    history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store &rarr;</button>
      </form>
    );
  }
}

export default StorePicker;
