/*
 * Package Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local Import
 */
import Home from 'src/components/Home';
import { changeInput } from 'src/store/ducks/Home';
import { createRoom } from 'src/store/middlewares/ajax';

/*
 * Code
 */

// State
const mapStateToProps = state => ({
  pseudo: state.home.pseudo,
});

// Actions
const mapDispatchToProps = (dispatch) => {
  // Define actions
  const actions = {
    changeInput,
    createRoom,
  };

  // Dispatch
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};


/*
 * Export
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home);
