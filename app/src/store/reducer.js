/*
 * Package Import
 */
import { combineReducers } from 'redux';

/*
 * Local Import
 */
import app from 'src/store/ducks/App';
import home from 'src/store/ducks/Home';

/*
 * Combine ...Reducers
 */
const reducer = combineReducers({ app, home });

/*
 * Export
 */
export default reducer;
