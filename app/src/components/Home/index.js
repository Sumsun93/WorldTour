/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
  };

  handleChange = (evt) => {
    const { changeInput } = this.props.actions;
    changeInput(evt.target.value);
  }

  handleSubmit = (evt) => {
    const { createRoom } = this.props.actions;
    evt.preventDefault();
    createRoom();
  }

  render() {
    const { pseudo } = this.props;

    return (
      <div id="homediv">
        <h1>World Tour</h1>
        <form onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}
