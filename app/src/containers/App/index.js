/*
 * Package Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

/*
 * Local Import
 */
import App from 'src/components/App';
import { wsConnect } from 'src/store/middlewares/socket';

/*
 * Code
 */

// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = (dispatch) => {
  // Define actions
  const actions = {
    wsConnect,
  };

  // Dispatch
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

/*
 * Export
 */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
