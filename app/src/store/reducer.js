/*
 * Package Import
 */
import { combineReducers } from 'redux';

/*
 * Local Import
 */
import app from 'src/store/ducks/App';
import home from 'src/store/ducks/Home';
import room from 'src/store/ducks/Room';

/*
 * Combine ...Reducers
 */
const reducer = combineReducers({ app, home, room });

/*
 * Export
 */
export default reducer;
