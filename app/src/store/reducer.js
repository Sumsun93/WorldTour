/*
 * Package Import
 */
import { combineReducers } from 'redux';

/*
 * Local Import
 */
import app from 'src/store/ducks/App';

/*
 * Combine ...Reducers
 */
const reducer = combineReducers({ app });

/*
 * Export
 */
export default reducer;
