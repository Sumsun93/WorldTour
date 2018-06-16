/*
  // done is a callback, you
 * NPM import
 */
import io from 'socket.io-client';
// import { toast } from 'react-toastify';

/*
 * Local import
 */
import { setRoom } from 'src/store/ducks/Room';

// Reducer


// socket
const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
const CREATE_ROOM = 'CREATE_ROOM';

/*
 * Middleware
 */

const socket = io('http://localhost:3000');

export default store => next => (action) => {
  // Code
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      socket.on('test', (datas) => {
        store.dispatch(setRoom(datas));
      });
      break;
    }

    case CREATE_ROOM: {
      const { pseudo } = store.getState().home;
      socket.emit('create_room', { pseudo });
      break;
    }
    default:
  }
  // On passe au voisin
  next(action);
};

/*
 * Action Creator
 */
export const wsConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const createRoom = () => ({
  type: CREATE_ROOM,
});
