/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

/*
 * Local Import
 */
// import { Container } from './style';

/*
 * Component
 */
export default class Home extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    pseudo: PropTypes.string.isRequired,
    room: PropTypes.bool.isRequired,
  };

  handleChange = (evt) => {
    const { changeInput } = this.props.actions;
    changeInput(evt.target.value);
  }

  handleSubmitCreate = (evt) => {
    const { actions, pseudo } = this.props;
    const { createRoom } = actions;
    evt.preventDefault();
    if (pseudo) {
      createRoom();
    }
  }

  handleSubmitJoin = () => {
    const { actions, pseudo } = this.props;
    if (pseudo) {
      console.log('OK');
    }
  }

  render() {
    const { pseudo, room } = this.props;

    if (room) {
      return <Redirect to="/room" />;
    }

    return (
      <div id="homediv">
        <h1>World Tour</h1>
        <div id="form">
          <form onSubmit={this.handleSubmitCreate}>
            <label htmlFor="createparty">
              Pseudo
              <input
                id="createparty"
                type="text"
                onChange={this.handleChange}
                value={pseudo}
              />
            </label>
            <button>Creer une partie</button>
          </form>
          <button onClick={this.handleSubmitJoin} name="join">Rejoindre une partie</button>
        </div>
      </div>
    );
  }
}
