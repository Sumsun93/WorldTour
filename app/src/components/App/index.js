/*
 * Package Import
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import items from './items';
import { Container } from './style';

/*
 * Component
 */

class App extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  };

  componentDidMount() {
    const { wsConnect } = this.props.actions;
    wsConnect();
  }

  render() {
    return (
      <Container>
        <Switch>
          {items.map(({ exact, path, Component }) => (
            <Route exact={exact} key={path} path={path} component={Component} />
          ))}
        </Switch>
      </Container>
    );
  }
}

/*
 * Export
 */
export default App;
