/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';

class Inventory extends React.Component {
  static propTypes = {
    updateFish: Proptypes.func,
    deleteFish: Proptypes.func,
    fishes: Proptypes.object,
    addFish: Proptypes.func,
    loadSampleFishes: Proptypes.func,
    storeId: Proptypes.string,
  };

  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    const store = await base.fetch(this.props.storeId, { context: this });
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    this.setState({
      owner: store.owner || authData.user.uid,
      uid: authData.user.uid,
    });
  };

  authenticate = (provider) => {
    const authProveder = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProveder).then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = (
      <button type="button" onClick={this.logout}>
        Log Out
      </button>
    );

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    const { addFish, loadSampleFishes } = this.props;

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner</p>
          {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
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
