/*
 * Types
 */
const CHANGE_INPUT = 'CHANGE_INPUT';

/*
 * Initial State
 */
const initialState = {
  pseudo: '',
};

/*
 * Reducer
 */
export default (prevState = initialState, action = {}) => {
  switch (action.type) {
    /*
     * Datas
     */
    case CHANGE_INPUT:
      return {
        ...prevState,
        pseudo: action.datas,
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
export const changeInput = datas => ({
  type: CHANGE_INPUT,
  datas,
});
/*
 * Selectors
 */
