/*
 * Local Import
 */

/*
 * Types
 */
const GET_DATAS = 'GET_DATAS';
const CREATE_ROOM = 'CREATE_ROOM';

/*
 * Middleware
 */
export default store => next => (action) => {
  switch (action.type) {
    /*
     * If the desired action has been triggered,
     * We can get the state, dispatch an action, ajax...
     */
    case GET_DATAS:
      // eslint-disable-next-line no-console
      console.log('store', store);
      break;

    case CREATE_ROOM: {
      const { pseudo } = store.getState().home;
      console.log(pseudo);
      break;
    }

    /*
     * If the triggered action does not interest us,
     * We do nothing
     */
    default:
  }

  // Pass to your neighbor
  next(action);
};

/*
 * Actions Creators
 */
export const getDatas = () => ({
  type: GET_DATAS,
});

export const createRoom = () => ({
  type: CREATE_ROOM,
});
