/*
 * Types
 */
const SET_ROOM = 'SET_ROOM';

/*
 * Initial State
 */
const initialState = {};

/*
 * Reducer
 */
export default (prevState = initialState, action = {}) => {
  switch (action.type) {
    /*
     * Datas
     */

    case SET_ROOM:
      return {
        ...prevState,
        ...action.room,
      };

    /*
       *If no action is found,
       * Just return the actual state
       */
    default:
      return prevState;
  }
};

/*
 * Actions Creators
 */
export const setRoom = room => ({
  type: SET_ROOM,
  room,
});
/*
 * Selectors
 */
