/*
 * Package Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local Import
 */
import Room from 'src/components/Room';

/*
 * Code
 */

// State
const mapStateToProps = state => ({
  room: state.room,
});

// Actions
const mapDispatchToProps = (dispatch) => {
  // Define actions
  const actions = {
  };

  // Dispatch
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};


/*
 * Export
 */
export default connect(mapStateToProps, mapDispatchToProps)(Room);
