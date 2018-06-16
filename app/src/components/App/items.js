/*
 * Package Import
 */

/*
 * Local Import
 */
import Home from 'src/containers/Home';
import Room from 'src/containers/Room';

/*
 * Code
 */
export default [
  {
    exact: true,
    path: '/',
    Component: Home,
  },
  {
    exact: true,
    path: '/room',
    Component: Room,
  },
];
