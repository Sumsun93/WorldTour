/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

/*
 * Local Import
 */
import Home from 'src/containers/Home';
// import { Container } from './style';

/*
 * Component
 */
export default class Room extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    room: PropTypes.object.isRequired,
  };

  render() {
    const { name, users } = this.props.room;

    if (Object.keys(this.props.room).length < 1) {
      return <Redirect to="/" />;
    }

    return (
      <div id="roomdiv">
        <h1>{name}</h1>
        <h2>Lobby</h2>

        <div id="playerlist">
          <h3>Joueurs:</h3>
          <ul>
            {users.map(user => <li>{user.pseudo}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
